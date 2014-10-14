use zips_test;

db.zips.count({});
//db.zips.findOne();


db.zips.aggregate([
    {$project:
     {
     _id: 1,
     city: 1,
     state:1,
     first_char : {$substr : ["$city",0,1]},
     pop:1
     }
    },
    {$match:
     {
       first_char :{$in: ['0','1','2','3','4','5','6','7','8','9']}
     }
    },
    {$group:
     {
        _id : null,
        sum : {$sum:"$pop"}

     }
    }
])
