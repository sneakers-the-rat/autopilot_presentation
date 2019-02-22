

class Terminal(QtGui.QMainWindow):

    def __init__(self):
        # type: () -> None
        super(Terminal, self).__init__()

        # networking
        self.node = None
        self.networking = None

        # data
        self.mice = {}  # Dict of our open mouse objects
        self.pilots = None

        # gui
        self.layout = None
        self.widget = None
        self.file_menu = None
        self.tool_menu = None
        self.control_panel = None
        self.data_panel = None
        self.logo = None


        # logging
        self.logger        = None
        self.log_handler   = None
        self.log_formatter = None

        # Load pilots db as ordered dictionary
        with open(prefs.PILOT_DB) as pilot_file:
            self.pilots = json.load(pilot_file, object_pairs_hook=odict)

        # Start Logging
        self.init_logging()

        # Listen dictionary - which methods to call for different messages
        # Methods are spawned in new threads using handle_message
        self.listens = {
            'STATE': self.l_state, # A Pi has changed state
            'PING' : self.l_ping,  # Someone wants to know if we're alive
            'DATA' : self.l_data,
            'HANDSHAKE': self.l_handshake # a pi is making first contact, telling us its IP
        }

        # Make invoker object to send GUI events back to the main thread
        self.invoker = Invoker()
        prefs.add('INVOKER', self.invoker)

        self.initUI()

        self.node = Net_Node(id="_T",
                             upstream='T',
                             port=prefs.MSGPORT,
                             listens=self.listens)
        self.logger.info("Net Node Initialized")

        # Start external communications in own process
        # Has to be after init_network so it makes a new context
        self.networking = Terminal_Networking(self.pilots)
        self.networking.start()
        self.logger.info("Networking object Initialized")

        # send an initial ping looking for our pilots
        self.node.send('T', 'INIT')

    def init_logging(self):
        """
        Start logging to a timestamped file in `prefs.LOGDIR`
        """

        timestr = datetime.datetime.now().strftime('%y%m%d_%H%M%S')
        log_file = os.path.join(prefs.LOGDIR, 'Terminal_Log_{}.log'.format(timestr))

        self.logger        = logging.getLogger('main')
        self.log_handler   = logging.FileHandler(log_file)
        self.log_formatter = logging.Formatter("%(asctime)s %(levelname)s : %(message)s")
        self.log_handler.setFormatter(self.log_formatter)
        self.logger.addHandler(self.log_handler)
        self.logger.setLevel(logging.INFO)
        self.logger.info('Terminal Logging Initiated')
