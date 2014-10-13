
use grades_test;

db.grades.aggregate([

    {
     "$unwind":"$scores"
    },
    {$match:
     {
     "scores.type" : {$ne:"quiz"}
     }
    },

    {'$group':
     {
        _id:{class_id:"$class_id", student_id:"$student_id"},
        'average':{"$avg":"$scores.score"}
     }
    },
    {'$group':
     {
        _id:"$_id.class_id",
        'average':{"$avg":"$average"}
     }
    },
    {$sort:
     {
     average:-1
     }
    }
])


