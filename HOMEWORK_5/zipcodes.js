use zipcodes;

db.zips.aggregate([
    {$match:
     {
     state: {$in: ["CA","NY"]},
     }
    },
    {$group:
     {
     _id: {state:"$state", city:"$city"},
     population: {$sum:"$pop"}
     }
    },
    {$match:
     {
     population: {$gt: 25000}
     }
    },
    {$group:
     {
     _id: {_id_city:"$_id.city"},
     avg_pop : {$avg: "$population"}
     }
    },
    {$group:
     {
     _id: 1,
     avg : {$avg: "$avg_pop"}
     }
    },

    {$project:
     {
     _id: 1,
     avg: 1
     }
    }
])

