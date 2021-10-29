# babynamegenerator

This project takes the Social Security Baby Name Database and uses it to suggest  baby names for the user.

Dating back to 1880, the United States Social Security Administration has kept records of all given names of babies born in a given year.

For this page, that data has been (painstakingly!) taken and compiled into the top 100 girl & boy names from each decade.

Users set their search parameters (which decade's names to pick from, a preferred starting letter, a preferred name length) and the Baby Name Generator produces a list of names that meet the search, then selects and displays a name at random that meets the user's search, along with some of that name's popularity statistics.

If you'd like to run the Baby Name Generator, you'll have to run a local Json server, as the database is stored in the attached db.json:

    As a reminder, the way to do so is by entering your terminal, navigating to the babynamegenerator directory and entering:

    1) npm install -g json-server (if you haven't ever done so already)
    2) json-server --watch db.json


From here, you can open index.html and have fun generating some baby names! Enjoy!