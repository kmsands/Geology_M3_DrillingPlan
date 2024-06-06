ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([494718.351676, 8073289.007295, 496105.003827, 8074106.251325]);
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
var lyr_SiteImageMay2024_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Site Image May 2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SiteImageMay2024_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047661, 13690974.580305, -1969212.879783]
                            })
                        });
var format_GradeControlClearanceLines_2 = new ol.format.GeoJSON();
var features_GradeControlClearanceLines_2 = format_GradeControlClearanceLines_2.readFeatures(json_GradeControlClearanceLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
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
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                popuplayertitle: "Disturbance Outline",
                interactive: true,
                    title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
                });
var format_DrillingPlan_4 = new ol.format.GeoJSON();
var features_DrillingPlan_4 = format_DrillingPlan_4.readFeatures(json_DrillingPlan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DrillingPlan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlan_4.addFeatures(features_DrillingPlan_4);
var lyr_DrillingPlan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrillingPlan_4, 
                style: style_DrillingPlan_4,
                popuplayertitle: "Drilling Plan",
                interactive: true,
    title: 'Drilling Plan<br />\
    <img src="styles/legend/DrillingPlan_4_0.png" /> Week 1<br />\
    <img src="styles/legend/DrillingPlan_4_1.png" /> Week 2<br />\
    <img src="styles/legend/DrillingPlan_4_2.png" /> Week 3<br />\
    <img src="styles/legend/DrillingPlan_4_3.png" /> Week 4<br />\
    <img src="styles/legend/DrillingPlan_4_4.png" /> Week 5<br />\
    <img src="styles/legend/DrillingPlan_4_5.png" /> <br />'
        });
var format_MiningExclusionArea_5 = new ol.format.GeoJSON();
var features_MiningExclusionArea_5 = format_MiningExclusionArea_5.readFeatures(json_MiningExclusionArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_MiningExclusionArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningExclusionArea_5.addFeatures(features_MiningExclusionArea_5);
var lyr_MiningExclusionArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningExclusionArea_5, 
                style: style_MiningExclusionArea_5,
                popuplayertitle: "Mining Exclusion Area",
                interactive: true,
                    title: '<img src="styles/legend/MiningExclusionArea_5.png" /> Mining Exclusion Area'
                });
var format_HeritageExlcusionZone_6 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_6 = format_HeritageExlcusionZone_6.readFeatures(json_HeritageExlcusionZone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HeritageExlcusionZone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_6.addFeatures(features_HeritageExlcusionZone_6);
var lyr_HeritageExlcusionZone_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageExlcusionZone_6, 
                style: style_HeritageExlcusionZone_6,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: true,
                    title: '<img src="styles/legend/HeritageExlcusionZone_6.png" /> Heritage Exlcusion Zone'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_SiteImageMay2024_1.setVisible(true);lyr_GradeControlClearanceLines_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(false);lyr_DrillingPlan_4.setVisible(true);lyr_MiningExclusionArea_5.setVisible(true);lyr_HeritageExlcusionZone_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SiteImageMay2024_1,lyr_GradeControlClearanceLines_2,lyr_DisturbanceOutline_3,lyr_DrillingPlan_4,lyr_MiningExclusionArea_5,lyr_HeritageExlcusionZone_6];
lyr_GradeControlClearanceLines_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'purpose': 'purpose', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'area (ha)': 'area (ha)', });
lyr_DrillingPlan_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'y': 'y', 'x': 'x', 'z': 'z', 'hole_id': 'hole_id', 'completed': 'completed', 'date_drill': 'date_drill', 'reporting_': 'reporting_', 'depth': 'depth', });
lyr_MiningExclusionArea_5.set('fieldAliases', {'id': 'id', });
lyr_HeritageExlcusionZone_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_GradeControlClearanceLines_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'purpose': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', 'area (ha)': 'TextEdit', });
lyr_DrillingPlan_4.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'z': 'TextEdit', 'hole_id': 'TextEdit', 'completed': 'TextEdit', 'date_drill': 'DateTime', 'reporting_': 'TextEdit', 'depth': 'TextEdit', });
lyr_MiningExclusionArea_5.set('fieldImages', {'id': 'TextEdit', });
lyr_HeritageExlcusionZone_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_GradeControlClearanceLines_2.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'purpose': 'no label', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'name': 'no label', 'area (ha)': 'no label', });
lyr_DrillingPlan_4.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'y': 'hidden field', 'x': 'hidden field', 'z': 'hidden field', 'hole_id': 'inline label - always visible', 'completed': 'hidden field', 'date_drill': 'inline label - always visible', 'reporting_': 'hidden field', 'depth': 'inline label - always visible', });
lyr_MiningExclusionArea_5.set('fieldLabels', {'id': 'no label', });
lyr_HeritageExlcusionZone_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_HeritageExlcusionZone_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});