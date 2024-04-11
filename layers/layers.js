ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([493856.843106, 8072216.360282, 497418.033466, 8074395.677695]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DisturbanceOutline_1 = new ol.format.GeoJSON();
var features_DisturbanceOutline_1 = format_DisturbanceOutline_1.readFeatures(json_DisturbanceOutline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_1.addFeatures(features_DisturbanceOutline_1);
var lyr_DisturbanceOutline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_1, 
                style: style_DisturbanceOutline_1,
                popuplayertitle: "Disturbance Outline",
                interactive: false,
                title: '<img src="styles/legend/DisturbanceOutline_1.png" /> Disturbance Outline'
            });
var format_Stage4Clearing_2 = new ol.format.GeoJSON();
var features_Stage4Clearing_2 = format_Stage4Clearing_2.readFeatures(json_Stage4Clearing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Stage4Clearing_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage4Clearing_2.addFeatures(features_Stage4Clearing_2);
var lyr_Stage4Clearing_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage4Clearing_2, 
                style: style_Stage4Clearing_2,
                popuplayertitle: "Stage 4 Clearing",
                interactive: false,
                title: '<img src="styles/legend/Stage4Clearing_2.png" /> Stage 4 Clearing'
            });
var format_HeritageExlcusionZone_3 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_3 = format_HeritageExlcusionZone_3.readFeatures(json_HeritageExlcusionZone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HeritageExlcusionZone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_3.addFeatures(features_HeritageExlcusionZone_3);
var lyr_HeritageExlcusionZone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageExlcusionZone_3, 
                style: style_HeritageExlcusionZone_3,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: false,
                title: '<img src="styles/legend/HeritageExlcusionZone_3.png" /> Heritage Exlcusion Zone'
            });
var format_HistoricDrillholes_4 = new ol.format.GeoJSON();
var features_HistoricDrillholes_4 = format_HistoricDrillholes_4.readFeatures(json_HistoricDrillholes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HistoricDrillholes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricDrillholes_4.addFeatures(features_HistoricDrillholes_4);
var lyr_HistoricDrillholes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoricDrillholes_4, 
                style: style_HistoricDrillholes_4,
                popuplayertitle: "Historic Drillholes",
                interactive: true,
                title: '<img src="styles/legend/HistoricDrillholes_4.png" /> Historic Drillholes'
            });
var format_DrillingPlanYear1to5_5 = new ol.format.GeoJSON();
var features_DrillingPlanYear1to5_5 = format_DrillingPlanYear1to5_5.readFeatures(json_DrillingPlanYear1to5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DrillingPlanYear1to5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanYear1to5_5.addFeatures(features_DrillingPlanYear1to5_5);
var lyr_DrillingPlanYear1to5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrillingPlanYear1to5_5, 
                style: style_DrillingPlanYear1to5_5,
                popuplayertitle: "Drilling Plan (Year 1 to 5)",
                interactive: true,
    title: 'Drilling Plan (Year 1 to 5)<br />\
    <img src="styles/legend/DrillingPlanYear1to5_5_0.png" /> Priority 1<br />\
    <img src="styles/legend/DrillingPlanYear1to5_5_1.png" /> Priority 2<br />\
    <img src="styles/legend/DrillingPlanYear1to5_5_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_DisturbanceOutline_1.setVisible(true);lyr_Stage4Clearing_2.setVisible(true);lyr_HeritageExlcusionZone_3.setVisible(true);lyr_HistoricDrillholes_4.setVisible(true);lyr_DrillingPlanYear1to5_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DisturbanceOutline_1,lyr_Stage4Clearing_2,lyr_HeritageExlcusionZone_3,lyr_HistoricDrillholes_4,lyr_DrillingPlanYear1to5_5];
lyr_DisturbanceOutline_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area (ha)': 'Area (ha)', });
lyr_Stage4Clearing_2.set('fieldAliases', {'id': 'id', 'd1': 'd1', 'd2': 'd2', 'd3': 'd3', 'd4': 'd4', 'ndx': 'ndx', });
lyr_HeritageExlcusionZone_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_HistoricDrillholes_4.set('fieldAliases', {'hole_id': 'hole_id', 'orig_east': 'orig_east', 'orig_north': 'orig_north', 'hole_type': 'hole_type', 'max_depth': 'max_depth', 'orig_grid_id': 'orig_grid_id', 'orig_rl': 'orig_rl', 'orig_survey_method': 'orig_survey_method', 'orig_sur': 'orig_sur', 'orig_survey_by': 'orig_survey_by', 'orig_survey_company': 'orig_survey_company', 'nat_grid_id': 'nat_grid_id', 'nat_east': 'nat_east', 'nat_north': 'nat_north', 'nat_rl': 'nat_rl', 'nat_survey_method': 'nat_survey_method', 'll_grid_id': 'll_grid_id', 'll_lat': 'll_lat', 'll_long': 'll_long', 'll_rl': 'll_rl', 'lease_id': 'lease_id', 'prospect': 'prospect', 'date_start': 'date_start', 'date_completed': 'date_completed', 'pow_id': 'pow_id', 'data_source': 'data_source', 'comments': 'comments', });
lyr_DrillingPlanYear1to5_5.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'x': 'x', 'y': 'y', 'priority': 'priority', 'pd2024': 'pd2024', 'depth': 'depth', });
lyr_DisturbanceOutline_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area (ha)': 'TextEdit', });
lyr_Stage4Clearing_2.set('fieldImages', {'id': 'TextEdit', 'd1': 'TextEdit', 'd2': 'TextEdit', 'd3': 'TextEdit', 'd4': 'TextEdit', 'ndx': 'TextEdit', });
lyr_HeritageExlcusionZone_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_HistoricDrillholes_4.set('fieldImages', {'hole_id': 'TextEdit', 'orig_east': 'TextEdit', 'orig_north': 'TextEdit', 'hole_type': 'TextEdit', 'max_depth': 'TextEdit', 'orig_grid_id': 'TextEdit', 'orig_rl': 'TextEdit', 'orig_survey_method': 'TextEdit', 'orig_sur': 'TextEdit', 'orig_survey_by': 'TextEdit', 'orig_survey_company': 'TextEdit', 'nat_grid_id': 'TextEdit', 'nat_east': 'TextEdit', 'nat_north': 'TextEdit', 'nat_rl': 'TextEdit', 'nat_survey_method': 'TextEdit', 'll_grid_id': 'TextEdit', 'll_lat': 'TextEdit', 'll_long': 'TextEdit', 'll_rl': 'TextEdit', 'lease_id': 'TextEdit', 'prospect': 'TextEdit', 'date_start': 'TextEdit', 'date_completed': 'TextEdit', 'pow_id': 'TextEdit', 'data_source': 'TextEdit', 'comments': 'TextEdit', });
lyr_DrillingPlanYear1to5_5.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'priority': 'Range', 'pd2024': 'TextEdit', 'depth': 'TextEdit', });
lyr_DisturbanceOutline_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Area (ha)': 'no label', });
lyr_Stage4Clearing_2.set('fieldLabels', {'id': 'no label', 'd1': 'no label', 'd2': 'no label', 'd3': 'no label', 'd4': 'no label', 'ndx': 'no label', });
lyr_HeritageExlcusionZone_3.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', });
lyr_HistoricDrillholes_4.set('fieldLabels', {'hole_id': 'header label - always visible', 'orig_east': 'hidden field', 'orig_north': 'hidden field', 'hole_type': 'hidden field', 'max_depth': 'header label - always visible', 'orig_grid_id': 'hidden field', 'orig_rl': 'hidden field', 'orig_survey_method': 'hidden field', 'orig_sur': 'hidden field', 'orig_survey_by': 'hidden field', 'orig_survey_company': 'hidden field', 'nat_grid_id': 'hidden field', 'nat_east': 'hidden field', 'nat_north': 'hidden field', 'nat_rl': 'hidden field', 'nat_survey_method': 'hidden field', 'll_grid_id': 'hidden field', 'll_lat': 'hidden field', 'll_long': 'hidden field', 'll_rl': 'hidden field', 'lease_id': 'hidden field', 'prospect': 'hidden field', 'date_start': 'hidden field', 'date_completed': 'header label - always visible', 'pow_id': 'hidden field', 'data_source': 'hidden field', 'comments': 'hidden field', });
lyr_DrillingPlanYear1to5_5.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'priority': 'hidden field', 'pd2024': 'header label - always visible', 'depth': 'header label - always visible', });
lyr_DrillingPlanYear1to5_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});