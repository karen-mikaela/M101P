FINAL: QUESTION 10

Understanding the output of explain We perform the following query on the enron dataset:
db.messages.find({'headers.Date':{'$gt': new Date(2001,3,1)}},{'headers.From':1, _id:0}).sort({'headers.From':1}).explain()
and get the following explain output.
```
{
	"cursor" : "BtreeCursor headers.From_1",
	"isMultiKey" : false,
	"n" : 83057,
	"nscannedObjects" : 120477,
	"nscanned" : 120477,
	"nscannedObjectsAllPlans" : 120581,
	"nscannedAllPlans" : 120581,
	"scanAndOrder" : false,
	"indexOnly" : false,
	"nYields" : 0,
	"nChunkSkips" : 0,
	"millis" : 250,
	"indexBounds" : {
		"headers.From" : [
			[
				{
					"$minElement" : 1
				},
				{
					"$maxElement" : 1
				}
			]
		]
	},
	"server" : "Andrews-iMac.local:27017"
}
```

The query did not utilize an index to figure out which documents match the find criteria.
The query used an index for the sorting phase.
The query performed a full collection scan
