
import pymongo
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)

# get a handle to the students database
db=connection.students
grades = db.grades


def find():

    print "find, reporting for duty"

    query = {'type':'homework'}

    try:
        cursor = grades.find(query)
        cursor = cursor.sort([('student_id',pymongo.ASCENDING),('score',pymongo.ASCENDING)])

    except:
        print "Unexpected error:", sys.exc_info()[0]

    id_student = 0
    count  = 0
    for doc in cursor:


        if (id_student == doc['student_id']):
            print "eliminar >> ", doc['student_id'] , "score",  doc['score']
            grades.remove({'type':'homework','student_id':doc['student_id'], 'score': doc['score']})
            id_student += 1

        count += 1

    print "total  ",count

find()

