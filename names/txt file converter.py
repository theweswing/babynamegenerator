def get_years_names(txt):
    step_one=open(txt)
    step_two=step_one.read()
    finished_name_list=step_two.split()
    return finished_name_list

get_years_names("/Users/wschierenbeck/Development/code/baby_name_generator/babynamegenerator/names/yob1880.txt")

eighteeneighty=get_years_names("/Users/wschierenbeck/Development/code/baby_name_generator/babynamegenerator/names/yob1880.txt")

eighteeneighty