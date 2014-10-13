use blog;


db.posts.count();

db.posts.aggregate([
    /* unwind by comments */
    {"$unwind":"$comments"},
    /* now group by comments, counting each author */
    {"$group":
     {"_id":"$comments.author",
      "count":{$sum:1}
     }
    },
    /* sort by popularity */
    {"$sort":{"count":-1}},
    /* show me the top 5 */
    {"$limit": 5},
    /* change the name of _id to be author */
    {"$project":
     {_id:0,
      'author':'$_id',
      'count' : 1
     }
    }
    ])
