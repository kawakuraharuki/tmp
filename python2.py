class BaseClass(): #基底クラス（親クラスとも）。継承元のクラス。
    def __init__(self, x): #クラスが呼び出されると自動的に呼ばれる関数。
        #この__init__()は初期化に必要で、ないとコードが動かない。「コンストラクタ」というらしい。
        self.x = x

    def base_method(self):
        return print(self.x)
    
    

class InheritedClass(BaseClass): #サブクラス（子クラス）。基底クラスであるBaseClassを引数にする。
    def __init__(self, x, y):
        super().__init__(x) #基底クラスのコンストラクタをオーバーライド。日本語で言うと、「基底クラスで定義した__init__を使い回しますよ」という命令。 
        # サブクラスで__init__を定義すると、基底クラスの__init__が上書きされてしまう。
        # これを書かないと、基底クラスの__init__は未定義のままになってしまい、例外が発生する。
        # 今回の場合、self.xが定義できなくなる。
        
        self.y = y
            
    # ※ ここで、base_methodはすでに基底クラスから継承されているので、ここで定義する必要がない。便利〜〜！
    
    def additional_method(self):
        return print(self.x + self.y)
    
A = BaseClass(1)
A.base_method()


B = InheritedClass(2, 3)
B.base_method() 
B.additional_method()  


