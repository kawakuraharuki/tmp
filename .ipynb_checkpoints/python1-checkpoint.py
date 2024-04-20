class Greeting:
    def __init__(self, name, wether, time):
        self.name = name
        self.wether = wether
        self.time = time
    
    def greet(self):
        print(f"Hello, {self.name}!, today is {self.wether} and it is {self.time} o'clock.")
        
    def goodbye(self):
        print(f"Goodbye, {self.name}!, it is {self.time + 7} o'clock.")
        
        
A = Greeting("John", "sunny", 3)
# A.greet()
# A.goodbye()


B = Greeting("Bob", "rainy", 7)
B.greet()
B.goodbye()



// バージョン管理します