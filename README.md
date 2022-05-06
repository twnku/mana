### https://twnku.github.io/mana/
#
### You can use https://twnku.github.io/mana/new.html
### or
### Sample format
```json
[
	{
		"id": 0,
		"type": "sword",
		"name": "Valentines Sword",
		"stats": {
			"data": {
				"releaseDate": "February 1945",
				"crates": "Valentines Crates",
				"type": "Netherite Sword",
				"slot": "Tools",
				"customTexture": false,
				"customEffect": false,
				"rarity": "Rare",
				"lore": "1945 Valentines Sword",
				"isWardrobe": false,
				"wardrobeType": "",
				"isFurniture": false
			},
			"enchant": {
				"survival": [
					{
						"Unbreakable": 1
					},{
						"Sharpness": 100
					}
				],
				"skyblock": [
					{
						"Unknown": 0
					}
				],
				"earth": [
					{
						"Unknown": 0
					}
				],
				"prison": [
					{
						"Unknown": 0
					}
				],
				"parkour": [
					{
						"Unknown": 0
					}
				],
				"kitpvp": [
					{
						"Unknown": 0
					}
				],
				"island": [
					{
						"Unknown": 0
					}
				],
				"faction": [
					{
						"Unknown": 0
					}
				]
			},
			"effects": {
				"survival": ["Instant Kill Players", "Health Boost 999"],
				"skyblock": [],
				"earth": [],
				"prison": [],
				"parkour": [],
				"kitpvp": [],
				"island": [],
				"faction": []
			}
		},
		"model": {
			"model": "{\"textures\":{\"top\": \"blocks/texture\"}, \"elements\": [{\"from\": [1, 0, 1], \"to\": [15, 15, 15], \"faces\":{\"south\":{\"uv\": [0, 0, 15, 15], \"texture\": \"#top\"}}}]}",
			"texture": [
				{
					"name": "texture",
					"texture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAAIJSAOPzZK7dkgxbUaqqeh++j////FmGLLAAAAAXRSTlMAQObYZgAAAD5JREFUGFeljDESACAIw4BW/P+PBQbxzk0zNRkq8ogVhxPB0HafDnAXg6eTHRAPOo5gmlyhP1jeQayWbv9lAXcuAMVFqT2nAAAAAElFTkSuQmCC"
				}
			],
			"viewer": {
				"x": 0,
				"y": 0,
				"z": 25
			}
		}
	}
]
```
<details>
  <summary>Spoiler</summary>
  
### 
- go to https://twnku.github.io/mana/new.html
- fill in all input values 
  - Name (e.g: `Valentines Sword`)
  - Release Date (e.g; `February 2022`)
  - Crates Name (e.g; `Valentines Crates`)
  - Item Type (e.g: `Netherite Sword`) 
  - Item Lores (e.g: `2022 Valentines Sword`)
  - List ID (it will autofill itself)
  - Category (click the label to select category)
  - Item Slot (e.g: `Tools` / `Weapons`)
  - Rarity (e.g: `Rare` / `Limited Edition` / `Super Rare`)
  - Enchantments list
  - etc
- Click `Generate JSON Output`

#
### Use 2d Model
- Scroll down to the bottom
- Click the `Default` Label to use default format
- Upload the texture pack file (e.g: diamond_sword.png from the texture pack)
- Scroll up again to the top
- Click `Load From Input`

### Use 3d Model
- Upload the custom model `json` file 
- Upload the custom model texture image
- Upload `mcmeta` file if needed
- Click `Load Texture` (if model doesnt load click the `Load From Input` after load texture)
#
if there is only 1 enchantments or effects and the `enchant` or `effects` is empty, click the `+ Add Custom Enchant` or `+ Add Custom Effect` and leave 1 row empty 
  
</details>
  
