import pandas as pd

trial_num = range(15)
target = ["L", "R", "L", "L", "R", 
          "R", "R", "L", "L", "L", 
          "R", "L", "L", "R", "R"]
response=["R", "L", "L", "R", "R", 
          "R", "L", "R", "L", "R", 
          "R", "R", "L", "L", "R"]

df = pd.DataFrame({'trial_num':trial_num,
                  'target' : target,
                  'response' : response})

df['correct'] = df['response'] == df['target']

df['freq'] = 4000
df.loc[df['target']== "R",'freq'] = 8000

df.to_json('./data.json', orient='records')

hashes = ['6d99057de0698b3a5ffc6bcdf39a60a220072464']
timestamps = ['2019-04-12']
diffs = ['''--- a/rpilot/core/terminal.py
+++ b/rpilot/core/terminal.py
@@ -289,7 +289,6 @@ class Terminal(QtGui.QMainWindow):
     # Listens & inter-object methods
 
     def toggle_start(self, starting, pilot, mouse=None):
-        # type: (bool, unicode, unicode) -> None
''']

df = pd.DataFrame({'timestamp': timestamps,
                   'hash': hashes,
                   'diff': diffs})
df.to_json('./hashes.json', orient='records')

