{
	"input": {
		"type": "BlueprintInputCSV",
		"options": {
			"path": "data/ecobici.csv"
		}
	},
	"output": {
		"type": "BlueprintOutputBars",
		"options": {
			"workerURL": "js/lib/vizi-worker.js",

			"height": 30,
			"radius": 60,

			"materialType": "MeshPhongMaterial",
			"materialOptions": {
				"transparent": true,
				"opacity": 0.4,
				"color": 16711680,
				"emissive": 16711680
			}
		}
	},
	"triggers": [{
		"triggerObject": "output",
		"triggerName": "initialised",
		"triggerArguments": [],
		"actionObject": "input",
		"actionName": "requestData",
		"actionArguments": [],
		"actionOutput": {}
	}, {
		"triggerObject": "input",
		"triggerName": "dataReceived",
		"triggerArguments": ["data"],
		"actionObject": "output",
		"actionName": "outputBars",
		"actionArguments": ["data"],
		"actionOutput": {
			"data": {
				"process": "map",
				"itemsObject": "data",
				"itemsProperties": "data",
				"transformation": {
					"coordinates": ["lon", "lat"]
				}
			}
		}
	}]
}
