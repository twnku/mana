var container = document.getElementById('wrapper');
            var viewer = new ModelViewer(container, 0, 0, 25);
            var model = new JsonModel('preview', itemData[0].model.model, itemData[0].model.texture);
            container.addEventListener('click', viewer.resize);
            viewer.load(model).hideGrid();
            var newmodel;
            
            function loadCategory(category){
                $('#item_container_list').empty();
                $('#item_container_preview').addClass('d-none');
                $('#item_container_list').empty();
                $.each(itemData, function(key, val) {
                   if(val.type == category){
                       if(val.stats.data.customTexture) {
                           isTextured = `<span class="row fw-bolder fs-9 badge badge-light-warning align-bottom">Custom Textured</span>`;
                       }else{
                           isTextured = `<span class="row fw-bolder fs-10 badge badge-light-warning align-bottom d-none">Custom Textured</span>`;
                       }
                       $('#item_container_list').append(`
                       <div class="col-sm-6 col-lg-4 mb-2">
                            <div onclick="loadPreviewData('`+val.id+`');" class="card card-stretch mb-xl-8" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Click to Preview">
                                <div class="card-body">
                                    <div class="d-flex align-item-center">
                                        <div class="col">
                                            <span class="row fw-bolder text-gray-800 fs-7 text-hover-warning">`+val.name+`</span>
                                            <span class="row fw-bolder text-gray-600 fs-8">`+val.stats.data.releaseDate+`</span>
                                            `+isTextured+`
                                        </div>
                                        <img src="`+itemThumbnail[val.stats.data.type]+`" alt="" class="align-self-center h-75px">
                                    </div>
                                </div>
                            </div>
                        </div>
                       `);
                   }
                });
            }
            
			function reloadTexture(){
				try {
					try {
						viewer.remove('preview');
					} catch (e) {
						console.log(e.message);
					}
					model = new JsonModel('preview', $('#txtrsmdl').val(), jQuery.parseJSON($('#txtrsrcs').val()));
					viewer.load(model);
				} catch (e) {
					toastr.warning("Please reload the model");
					console.log(e.message);
				}
			}

            function loadPreviewData(itemID){
				$('#txtrsrcs').val(JSON.stringify(itemData[itemID].model.texture));
				$('#txtrsmdl').val(itemData[itemID].model.model);
                $('#item_container_list').empty();
                $('#item_container_preview').removeClass('d-none');
                $('.menu-accordion, .menu-sub-accordion').removeClass('show').removeClass('hover'); $('.menu-link').removeClass('active');$('#catPrevC').addClass('active');
                $('#iiname').html(itemData[itemID].name);$('#idate').html(itemData[itemID].stats.data.releaseDate);$('#icname').html(itemData[itemID].stats.data.crates);$('#itype').html(itemData[itemID].stats.data.type);$('#islot').html(itemData[itemID].stats.data.slot);$('#itexture').html( (itemData[itemID].stats.data.customTexture == true) ? "Yes" : "No" );$('#ieffect').html( (itemData[itemID].stats.data.customEffect == true) ? "Yes" : "No" );$('#irarity').html(itemData[itemID].stats.data.rarity);$('#widget_tab_1_enchant, #widget_tab_2_enchant, #widget_tab_3_enchant, #widget_tab_4_enchant, #widget_tab_1_effect, #widget_tab_2_effect, #widget_tab_3_effect, #widget_tab_4_effect').empty();
                if(itemData[itemID].stats.enchant.survival.length >= 1){
                    $('#survival_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.survival, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#survival_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#survival_enchantment').empty();
					$('#survival_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.prison.length >= 1){
                    $('#prison_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.prison, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#prison_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#prison_enchantment').empty();
					$('#prison_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.skyblock.length >= 1){
                    $('#skyblock_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.skyblock, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#skyblock_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#skyblock_enchantment').empty();
					$('#skyblock_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.earth.length >= 1){
                    $('#earth_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.earth, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#earth_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#earth_enchantment').empty();
					$('#earth_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                
                if(itemData[itemID].stats.effects.survival.length >= 1){
                    $('#survival_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.survival, function(key, val) {
                        $('#survival_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#survival_custom_effect').empty();
					$('#survival_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.prison.length >= 1){
                    $('#prison_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.prison, function(key, val) {
                        $('#prison_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#prison_custom_effect').empty();
					$('#prison_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.skyblock.length >= 1){
                    $('#skyblock_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.skyblock, function(key, val) {
                        $('#skyblock_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#skyblock_custom_effect').empty();
					$('#skyblock_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.earth.length >= 1){
                    $('#earth_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.earth, function(key, val) {
                        $('#earth_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#earth_custom_effect').empty();
					$('#earth_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder"></span></div>`);
				};

				if(itemData[itemID].stats.enchant.parkour.length >= 1){
                    $('#parkour_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.parkour, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#parkour_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#parkour_enchantment').empty();
					$('#parkour_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.island.length >= 1){
                    $('#island_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.island, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#island_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#island_enchantment').empty();
					$('#island_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.kitpvp.length >= 1){
                    $('#kitpvp_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.kitpvp, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#kitpvp_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#kitpvp_enchantment').empty();
					$('#kitpvp_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                if(itemData[itemID].stats.enchant.faction.length >= 1){
                    $('#faction_enchantment').empty();
                    $.each(itemData[itemID].stats.enchant.faction, function(key, val) {
                        $.each(val, function(key2, val2) {
                           $('#faction_enchantment').append(`
                            <span class="mr-2 fw-bolder text-gray-600">`+key2+` <span class="badge badge-light badge-inline font-weight-bolder">`+val2+`</span></span>
                            <div class="progress mt-1 mb-1">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: `+((100/10)*val2)+`%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            `); 
                        });
                    });
                }else{
					$('#faction_enchantment').empty();
					$('#faction_enchantment').append(`
									<span class="mr-2 fw-bolder text-gray-600">Unknown <span class="badge badge-light badge-inline font-weight-bolder">0</span></span>
                                                            <div class="progress mt-1 mb-1">
                                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                    `); 
				}
                
                if(itemData[itemID].stats.effects.island.length >= 1){
                    $('#island_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.island, function(key, val) {
                        $('#island_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#island_custom_effect').empty();
					$('#island_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.parkour.length >= 1){
                    $('#parkour_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.parkour, function(key, val) {
                        $('#parkour_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#parkour_custom_effect').empty();
					$('#parkour_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.kitpvp.length >= 1){
                    $('#kitpvp_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.kitpvp, function(key, val) {
                        $('#kitpvp_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#kitpvp_custom_effect').empty();
					$('#kitpvp_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1"></span></div>`);
				};
                
                if(itemData[itemID].stats.effects.faction.length >= 1){
                    $('#faction_custom_effect').empty();
                    $.each(itemData[itemID].stats.effects.faction, function(key, val) {
                        $('#faction_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1">`+val+`</span></div>
                        `);
                    });
                }else{
					$('#faction_custom_effect').empty();
					$('#faction_custom_effect').append(`<div class="row"><span class="text-gray-500 fw-bolder mt-1 mb-1"></span></div>`);
				};
				
				try {
					try {
					viewer.remove('preview');
					} catch (e) {
						console.log(e.message);
					}
					var newmodel = new JsonModel('preview', itemData[itemID].model.model, itemData[itemID].model.texture)
					viewer.load(newmodel)
					viewer.hideGrid()
				} catch (e) {
					toastr.warning("Please reload the model");
					console.log(e.message);
				}
				
                /*try {
                    viewer.remove('preview');
                } catch (e) {
                    console.log(e.message);
                }
                var newmodel = new JsonModel('preview', itemData[itemID].model.model, itemData[itemID].model.texture);
                try {
                    viewer.remove('preview');
                } catch (e) {
                    console.log(e.message);
                }
                model = newmodel;
                viewer.load(model);
                viewer.hideGrid();*/
                
                //alert(itemID);
            }
            
            var itemCounters = {
                "helmet": 0,
                "boot": 0,
                "chestplate": 0,
                "legging": 0,
                "bow": 0,
                "sword": 0,
                "fishingrod": 0,
                "axe": 0,
                "pickaxe": 0,
                "shovel": 0,
                "hoe": 0,
                "wardrobe": 0,
                "furniture": 0,
                "misc": 0
            };
            var itemThumbnail = {
                "Diamond Helmet": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Diamond_Helmet_JE2_BE2.png",
                "Diamond Chestplate": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Diamond_Chestplate_JE3_BE2.png",
                "Diamond Leggings": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Diamond_Leggings_JE2_BE2.png",
                "Diamond Boots": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Diamond_Boots_JE2_BE2.png",
                "Turtle Helmet": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Turtle_Shell.png",
                "Leather Helmet": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Leather_Cap_JE4_BE2.png",
                "Leather Chestplate": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Leather_Tunic_JE4_BE2.png",
                "Leather Leggings": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/06/Leather_Pants_JE4_BE2.png",
                "Leather Boots": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/25/Leather_Boots_JE3_BE2.png",
                "Netherite Helmet": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Netherite_Helmet_JE2_BE1.png",
                "Netherite Chestplate": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Netherite_Chestplate_JE2_BE1.png",
                "Netherite Leggings": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8d/Netherite_Leggings_JE3_BE2.png",
                "Netherite Boots": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/Netherite_Boots_JE2_BE1.png",
                "Diamond Axe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/40/Diamond_Axe_JE3_BE3.png",
                "Diamond Sword": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png",
                "Diamond Pickaxe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Diamond_Pickaxe_JE3_BE3.png",
                "Diamond Shovel": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ec/Diamond_Shovel_JE3_BE3.png",
                "Diamond Hoe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Diamond_Hoe_JE3_BE3.png",
                "Netherite Axe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/df/Netherite_Axe_JE2.png",
                "Netherite Sword": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Netherite_Sword_JE2_BE2.png",
                "Netherite Pickaxe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Netherite_Pickaxe_JE3.png",
                "Netherite Shovel": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a1/Netherite_Shovel_JE2_BE1.png",
                "Netherite Hoe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d7/Netherite_Hoe_JE2_BE2.png",
                "Iron Hoe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Iron_Hoe_JE2_BE2.png",
                "Golden Axe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Golden_Axe_JE3_BE2.png",
                "Stick": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png",
                "Fishing Rod": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7f/Fishing_Rod_JE2_BE2.png",
                "Furniture": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Barrier_%28held%29_JE1_BE1.png",
                "Bow": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png",
                "Wardrobe": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Barrier_%28held%29_JE1_BE1.png",
                "Horse Armor": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Diamond_Horse_Armor_%28item%29_JE3_BE3.png",
                "Clock": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Clock_JE3_BE3.gif",
                "Firework": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fd/Firework_Rocket_JE2_BE2.png",
                "Blaze Rod": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/Blaze_Rod_JE1_BE1.png",
                "Iron Horse Armor": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Iron_Horse_Armor_%28item%29_JE1_BE1.png",
                "Pumpkin Pie": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png",
                "Music Disc": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Music_Disc_Stal_JE1_BE1.png",
                "Cooked Chicken": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/Cooked_Chicken_JE3_BE3.png",
                "Shield": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c6/Shield_JE2_BE1.png",
                "Carrot": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/Carrot_JE3_BE2.png",
                "Shears": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Shears_JE2_BE2.png",
                "Elytra": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1f/Elytra_%28item%29_JE1_BE1.png",
				"Trident": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Trident.png",
				"Carved Pumpkin": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Carved_Pumpkin_%28S%29_JE4.png",
                "Blue Stained Glass": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a4/Blue_Stained_Glass_JE3_BE3.png",
				"Snowball": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/Snowball_JE3_BE3.png",
				"Potion": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2c/Uncraftable_Potion_JE2.png",
				"Water Bucket": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/Water_Bucket_JE2_BE2.png",
				"Golden Sword": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Golden_Sword_JE3_BE2.png",
				"Back Gear": "https://i.imgur.com/U3PrYco.png",
				"Hand Gear": "https://i.imgur.com/CRf5icJ.png",
				"Hat": "https://i.imgur.com/G5auM56.png",
				"Furniture": "https://i.imgur.com/Um6Lt8R.png"
            }
            var isTextured; 
            $('#item_container_list').empty();
            $.each(itemData, function(key, val) {
               itemCounters[val.type]++;
               $('#total'+val.type).html(itemCounters[val.type]);
               if(val.type == "helmet"){
                   if(val.stats.data.customTexture) {
                       isTextured = `<span class="row fw-bolder fs-9 badge badge-light-warning align-bottom">Custom Textured</span>`;
                   }else{
                       isTextured = `<span class="row fw-bolder fs-10 badge badge-light-warning align-bottom d-none">Custom Textured</span>`;
                   }
                   $('#item_container_list').append(`
                   <div class="col-sm-6 col-lg-4 mb-2">
                        <div onclick="loadPreviewData('`+val.id+`');" class="card card-stretch mb-xl-8" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-placement="top" title="Click to Preview">
                            <div class="card-body">
                                <div class="d-flex align-item-center">
                                    <div class="col">
                                        <span class="row fw-bolder text-gray-800 fs-7 text-hover-warning">`+val.name+`</span>
                                        <span class="row fw-bolder text-gray-600 fs-8">`+val.stats.data.releaseDate+`</span>
                                        `+isTextured+`
                                    </div>
                                    <img src="`+itemThumbnail[val.stats.data.type]+`" alt="" class="align-self-center h-75px">
                                </div>
                            </div>
                        </div>
                    </div>
                   `);
               }
            });