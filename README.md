# Pomelo_Challenge
Pomelo_Challenge

## API
### PathAPI : http://localhost:8888/reParent
### Input: 
    data: {
        [
            {
                id: integer,
                title: string,
                children: [],
                parent_id: integer
            },...
        ],...
    }

### Output:
    [
        {
            "id": integer,
            "title": string,
            "level": integer,
            "children": [
                {
                    "id": integer,
                    "title": string,
                    "level": integer,
                    "children": [
                        {
                            "id": integer,
                            "title": string,
                            "level": integer,
                            "children": [],
                            "parent_id": integer
                        },...
                    ],
                    "parent_id": 10
                },...
            ],
            "parent_id": null
        }
]

### SearchAPI 
http://localhost:8888