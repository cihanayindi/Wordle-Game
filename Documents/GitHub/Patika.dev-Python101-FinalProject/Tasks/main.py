# Patika Veri Analizi Patikası Python Temel dersi sonu proje ödevi

# Task 1

input1 = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
yeni = []

def flatten(a):
    for i in a:
        if isinstance(i, list):
            flatten(i)
        else:
            yeni.append(i)

flatten(input1)
print(yeni)

# Task 2

input2 = [[1, 2], [3, 4], [5, 6, 7]]
liste = []

def reverse(a):
    a.reverse()
    for i in a:
        if isinstance(i,list):
            i.reverse()
            liste.append(i)
reverse(input2)
print(liste)






