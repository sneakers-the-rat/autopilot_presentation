class Free_Water(Task):
    """
    Randomly light up one of the ports, then dispense water when the mouse pokes there

    Two stages:

    * waiting for response, and
    * reporting the response afterwards
    """

    # Parameters that define task operation
    PARAMS = odict()
    PARAMS['reward']       = {'tag'  : 'Reward Duration (ms)',
                              'type' : 'int'}
    PARAMS['allow_repeat'] = {'tag'  : 'Allow Repeated Ports?',
                              'type' : 'check'}

    # Data that will be stored from the task
    class TrialData(tables.IsDescription):
        trial_num = tables.Int32Col()
        target    = tables.StringCol(1)
        timestamp = tables.StringCol(26)

    # Hardware needed for the task
    HARDWARE = {
        'POKES':{
            'L': hardware.Beambreak,
            'C': hardware.Beambreak,
            'R': hardware.Beambreak
        },
        'LEDS':{
            'L': hardware.LED_RGB,
            'C': hardware.LED_RGB,
            'R': hardware.LED_RGB
        },
        'PORTS':{
            'L': hardware.Solenoid,
            'C': hardware.Solenoid,
            'R': hardware.Solenoid
        }
    }

    # Plot to generate from returned data
    PLOT = {
        'data': {
            'target': 'point',
            'target': 'rollmean'
        },
        'roll_window' : 50
    }

    def __init__(...):

        # ...

        # create an iterator to cycle through
        # the two stages of the task
        stage_list = [self.water, self.response]
        self.stages = itertools.cycle(stage_list)

        # ...

    def water(self, *args, **kwargs):
        """
        First stage of task - pick a port and open it if it's poked.
        """

        # Decide a target port
        self.target = random.choice(['L', 'C', 'R'])

        # Get the method to open the target port
        open_port = self.pins['PORTS'][self.target].open

        # Assign the method as the target port's trigger
        self.triggers[self.target] = open_port

        # Turn its light on
        self.set_leds({self.target: [0, 255, 0]})

        # Return data
        data = {
            'target':     self.target,
            'trial_num' : self.trial_counter.next()
        }
        return data

    def response(self):
        """
        Just have to alert the Terminal that the current trial has ended
        and turn off any lights.
        """

        # turn the light off
        self.set_leds()

        # tell the terminal when the poke happened
        data = {
            'timestamp': datetime.datetime.now().isoformat(),
            'TRIAL_END': True
        }
        return data



