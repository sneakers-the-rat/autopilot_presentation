class Nafc(Task):
    PARAMS = {}
    PARAMS['stim']   = {'tag'  : 'Sound Stimuli',
                        'type' : 'sounds'}
    PARAMS['reward'] = {'tag'  : 'Reward Duration (ms)',
                        'type' : 'int'}

    class TrialData(tables.IsDescription):
        target = tables.StringCol(1)
        correct = tables.BoolCol()

    PLOT = {}
    PLOT['data']  =  {'target'  : 'point',
                      'correct' : 'rollmean'},
    # n trials to roll window over
    PLOT['params'] = {'roll_window' : 50}

    HARDWARE = {
        'POKES':{
            'L': hardware.Beambreak,
            'R': hardware.Beambreak
        },
        'PORTS':{
            'C': hardware.Solenoid
        }
    }

    def __init__(stim, reward=10):

        self.stim_mgr = Stim_Manager(stim)
        self.reward   = Reward_Manager(reward)

        stage_list  = [self.discrim, self.reinforcement]
        self.stages = itertools.cycle(stage_list)

        self.init_hardware()

        self.stages.next()()

    def discrim():
        target, wrong, stim = self.stim_mgr.next()
        self.target = target

        self.triggers[target] = [
            self.hardware['PORTS']['C'].open,
            self.stages.next()
            ]

        self.triggers[wrong] = self.stages.next()

        self.node.send('DATA', {'target':target})

        stim.play()

    def reinforcement(response):
        if response == self.target:
            self.node.send('DATA', {'correct':True}
        else:
            self.node.send('DATA', {'correct':False}

        self.stages.next()()
