
use eron;

db.message.aggregate([

    {$unwind:"$headers.To"},
    {$project:
        {
        "headers.To" :1,
        "headers.From" :1,
        "headers.Message-ID":1,
        _id:0

        }
    },
    {$group:
        {
        _id:{id_message:"$headers.Message-ID"},
        to:{$addToSet: "$headers.To"},
        from:{$addToSet: "$headers.From"},
        }
    },
    {$unwind:"$to"},
    {$unwind:"$from"},
    {$group:
        {
        _id:{from:"$from", to: "$to"},
        count:{$sum: 1}
        }
    },
    {$sort: {count:-1}},
    {$limit: 10}

])


