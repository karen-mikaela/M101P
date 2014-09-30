
import pymongo
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)

# get a handle to the school database
db=connection.school
students = db.students


def reduce():


    try:
        cursor = students.find()

    except:
        print "Unexpected error:", sys.exc_info()[0]


    for doc in cursor:
        scores_hw = []
        scores = []
        for _score in doc['scores']:
            if (_score['type'] != "homework"):
                scores.append({"type":_score['type'], "score": _score['score']})
            else:
                scores_hw.append(_score['score'])

        scores.append({"type": "homework", "score":max(scores_hw)})
        students.update( { '_id': doc['_id']}, { '$set': { "scores" : scores } } )

        print scores




reduce()


