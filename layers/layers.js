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
var lyr_240525_Site_composite_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "240525_Site_composite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240525_Site_composite_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047665, 13690974.632713, -1969212.879783]
                            })
                        });
var format_GradeControlClearanceLines_2 = new ol.format.GeoJSON();
var features_GradeControlClearanceLines_2 = format_GradeControlClearanceLines_2.readFeatures(json_GradeControlClearanceLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GradeControlClearanceLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GradeControlClearanceLines_2.addFeatures(features_GradeControlClearanceLines_2);
var lyr_GradeControlClearanceLines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GradeControlClearanceLines_2, 
                style: style_GradeControlClearanceLines_2,
                popuplayertitle: "Grade Control Clearance Lines",
                interactive: true,
                    title: '<img src="styles/legend/GradeControlClearanceLines_2.png" /> Grade Control Clearance Lines'
                });
var format_DrillingPlan_3 = new ol.format.GeoJSON();
var features_DrillingPlan_3 = format_DrillingPlan_3.readFeatures(json_DrillingPlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlan_3.addFeatures(features_DrillingPlan_3);
var lyr_DrillingPlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrillingPlan_3, 
                style: style_DrillingPlan_3,
                popuplayertitle: "Drilling Plan",
                interactive: true,
    title: 'Drilling Plan<br />\
    <img src="styles/legend/DrillingPlan_3_0.png" /> Week 1<br />\
    <img src="styles/legend/DrillingPlan_3_1.png" /> Week 2<br />\
    <img src="styles/legend/DrillingPlan_3_2.png" /> Week 3<br />\
    <img src="styles/legend/DrillingPlan_3_3.png" /> Week 4<br />\
    <img src="styles/legend/DrillingPlan_3_4.png" /> Week 5<br />\
    <img src="styles/legend/DrillingPlan_3_5.png" /> Week 6<br />\
    <img src="styles/legend/DrillingPlan_3_6.png" /> Week 7<br />\
    <img src="styles/legend/DrillingPlan_3_7.png" /> Week 8<br />\
    <img src="styles/legend/DrillingPlan_3_8.png" /> Not Drilled<br />'
        });
var format_MiningExclusionArea_4 = new ol.format.GeoJSON();
var features_MiningExclusionArea_4 = format_MiningExclusionArea_4.readFeatures(json_MiningExclusionArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningExclusionArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningExclusionArea_4.addFeatures(features_MiningExclusionArea_4);
var lyr_MiningExclusionArea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningExclusionArea_4, 
                style: style_MiningExclusionArea_4,
                popuplayertitle: "Mining Exclusion Area",
                interactive: true,
                    title: '<img src="styles/legend/MiningExclusionArea_4.png" /> Mining Exclusion Area'
                });
var format_HeritageExlcusionZone_5 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_5 = format_HeritageExlcusionZone_5.readFeatures(json_HeritageExlcusionZone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageExlcusionZone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_5.addFeatures(features_HeritageExlcusionZone_5);
var lyr_HeritageExlcusionZone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageExlcusionZone_5, 
                style: style_HeritageExlcusionZone_5,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: true,
                    title: '<img src="styles/legend/HeritageExlcusionZone_5.png" /> Heritage Exlcusion Zone'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_240525_Site_composite_1.setVisible(true);lyr_GradeControlClearanceLines_2.setVisible(true);lyr_DrillingPlan_3.setVisible(true);lyr_MiningExclusionArea_4.setVisible(true);lyr_HeritageExlcusionZone_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_240525_Site_composite_1,lyr_GradeControlClearanceLines_2,lyr_DrillingPlan_3,lyr_MiningExclusionArea_4,lyr_HeritageExlcusionZone_5];
lyr_GradeControlClearanceLines_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'purpose': 'purpose', });
lyr_DrillingPlan_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'y': 'y', 'x': 'x', 'z': 'z', 'hole_id': 'hole_id', 'completed': 'completed', 'date_drill': 'date_drill', 'reporting_': 'reporting_', 'depth': 'depth', });
lyr_MiningExclusionArea_4.set('fieldAliases', {'id': 'id', });
lyr_HeritageExlcusionZone_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_GradeControlClearanceLines_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'purpose': 'TextEdit', });
lyr_DrillingPlan_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'z': 'TextEdit', 'hole_id': 'TextEdit', 'completed': 'TextEdit', 'date_drill': 'DateTime', 'reporting_': 'TextEdit', 'depth': 'TextEdit', });
lyr_MiningExclusionArea_4.set('fieldImages', {'id': 'TextEdit', });
lyr_HeritageExlcusionZone_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_GradeControlClearanceLines_2.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'purpose': 'hidden field', });
lyr_DrillingPlan_3.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'y': 'hidden field', 'x': 'hidden field', 'z': 'hidden field', 'hole_id': 'inline label - always visible', 'completed': 'hidden field', 'date_drill': 'inline label - always visible', 'reporting_': 'hidden field', 'depth': 'inline label - always visible', });
lyr_MiningExclusionArea_4.set('fieldLabels', {'id': 'hidden field', });
lyr_HeritageExlcusionZone_5.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', });
lyr_HeritageExlcusionZone_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});