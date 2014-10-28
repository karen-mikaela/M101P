FINAL: QUESTION 8

Suppose you have a three node replica set. Node 1 is the primary. Node 2 is a secondary, and node 3 is a secondary running with a delay of two hours. All writes to the database are issued with w=majority and j=1 (by which we mean that the getLastError call has those values set).

A write operation (which could be insert or update) is initiated from your application using the pymongo driver at time t=0. At time t=5 seconds, the primary (Node 1), goes down for an hour and Node 2 is elected primary. Note that your write operation has not yet returned at the time of the failure. Note also that although you have not received a response from the write, it has been processed and written by Node 1 before the failure. Node 3, since it has a slave delay option set, is lagging.

Will there be a rollback of data on Node 1 when it comes back up? Choose the best answer.
```
No, never
```
