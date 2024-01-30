var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_20240130_RGB_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "20240130_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20240130_RGB_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686050.961985, -1973211.353674, 13695068.669474, -1969321.545041]
                            })
                        });
var format_label_940950mlabel_94_2 = new ol.format.GeoJSON();
var features_label_940950mlabel_94_2 = format_label_940950mlabel_94_2.readFeatures(json_label_940950mlabel_94_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_940950mlabel_94_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_940950mlabel_94_2.addFeatures(features_label_940950mlabel_94_2);
var lyr_label_940950mlabel_94_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_940950mlabel_94_2, 
                style: style_label_940950mlabel_94_2,
                interactive: true,
                title: '<img src="styles/legend/label_940950mlabel_94_2.png" /> label_94.0 - 95.0m — label_94'
            });
var format_label_950960mlabel_95_3 = new ol.format.GeoJSON();
var features_label_950960mlabel_95_3 = format_label_950960mlabel_95_3.readFeatures(json_label_950960mlabel_95_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_950960mlabel_95_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_950960mlabel_95_3.addFeatures(features_label_950960mlabel_95_3);
var lyr_label_950960mlabel_95_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_950960mlabel_95_3, 
                style: style_label_950960mlabel_95_3,
                interactive: true,
                title: '<img src="styles/legend/label_950960mlabel_95_3.png" /> label_95.0 - 96.0m — label_95'
            });
var format_label_960970mlabel_96_4 = new ol.format.GeoJSON();
var features_label_960970mlabel_96_4 = format_label_960970mlabel_96_4.readFeatures(json_label_960970mlabel_96_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_960970mlabel_96_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_960970mlabel_96_4.addFeatures(features_label_960970mlabel_96_4);
var lyr_label_960970mlabel_96_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_960970mlabel_96_4, 
                style: style_label_960970mlabel_96_4,
                interactive: true,
                title: '<img src="styles/legend/label_960970mlabel_96_4.png" /> label_96.0 - 97.0m — label_96'
            });
var format_label_970980mlabel_97_5 = new ol.format.GeoJSON();
var features_label_970980mlabel_97_5 = format_label_970980mlabel_97_5.readFeatures(json_label_970980mlabel_97_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_970980mlabel_97_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_970980mlabel_97_5.addFeatures(features_label_970980mlabel_97_5);
var lyr_label_970980mlabel_97_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_970980mlabel_97_5, 
                style: style_label_970980mlabel_97_5,
                interactive: true,
                title: '<img src="styles/legend/label_970980mlabel_97_5.png" /> label_97.0 - 98.0m — label_97'
            });
var format_label_980990mlabel_98_6 = new ol.format.GeoJSON();
var features_label_980990mlabel_98_6 = format_label_980990mlabel_98_6.readFeatures(json_label_980990mlabel_98_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_980990mlabel_98_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_980990mlabel_98_6.addFeatures(features_label_980990mlabel_98_6);
var lyr_label_980990mlabel_98_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_980990mlabel_98_6, 
                style: style_label_980990mlabel_98_6,
                interactive: true,
                title: '<img src="styles/legend/label_980990mlabel_98_6.png" /> label_98.0 - 99.0m — label_98'
            });
var format_label_9901000mlabel_99_7 = new ol.format.GeoJSON();
var features_label_9901000mlabel_99_7 = format_label_9901000mlabel_99_7.readFeatures(json_label_9901000mlabel_99_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_9901000mlabel_99_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_9901000mlabel_99_7.addFeatures(features_label_9901000mlabel_99_7);
var lyr_label_9901000mlabel_99_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_9901000mlabel_99_7, 
                style: style_label_9901000mlabel_99_7,
                interactive: true,
                title: '<img src="styles/legend/label_9901000mlabel_99_7.png" /> label_99.0 - 100.0m — label_99'
            });
var format_label_10001010mlabel_100_8 = new ol.format.GeoJSON();
var features_label_10001010mlabel_100_8 = format_label_10001010mlabel_100_8.readFeatures(json_label_10001010mlabel_100_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10001010mlabel_100_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10001010mlabel_100_8.addFeatures(features_label_10001010mlabel_100_8);
var lyr_label_10001010mlabel_100_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10001010mlabel_100_8, 
                style: style_label_10001010mlabel_100_8,
                interactive: true,
                title: '<img src="styles/legend/label_10001010mlabel_100_8.png" /> label_100.0 - 101.0m — label_100'
            });
var format_label_10101020mlabel_101_9 = new ol.format.GeoJSON();
var features_label_10101020mlabel_101_9 = format_label_10101020mlabel_101_9.readFeatures(json_label_10101020mlabel_101_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10101020mlabel_101_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10101020mlabel_101_9.addFeatures(features_label_10101020mlabel_101_9);
var lyr_label_10101020mlabel_101_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10101020mlabel_101_9, 
                style: style_label_10101020mlabel_101_9,
                interactive: true,
                title: '<img src="styles/legend/label_10101020mlabel_101_9.png" /> label_101.0 - 102.0m — label_101'
            });
var format_label_10201030mlabel_102_10 = new ol.format.GeoJSON();
var features_label_10201030mlabel_102_10 = format_label_10201030mlabel_102_10.readFeatures(json_label_10201030mlabel_102_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10201030mlabel_102_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10201030mlabel_102_10.addFeatures(features_label_10201030mlabel_102_10);
var lyr_label_10201030mlabel_102_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10201030mlabel_102_10, 
                style: style_label_10201030mlabel_102_10,
                interactive: true,
                title: '<img src="styles/legend/label_10201030mlabel_102_10.png" /> label_102.0 - 103.0m — label_102'
            });
var format_label_10301040mlabel_103_11 = new ol.format.GeoJSON();
var features_label_10301040mlabel_103_11 = format_label_10301040mlabel_103_11.readFeatures(json_label_10301040mlabel_103_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10301040mlabel_103_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10301040mlabel_103_11.addFeatures(features_label_10301040mlabel_103_11);
var lyr_label_10301040mlabel_103_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10301040mlabel_103_11, 
                style: style_label_10301040mlabel_103_11,
                interactive: true,
                title: '<img src="styles/legend/label_10301040mlabel_103_11.png" /> label_103.0 - 104.0m — label_103'
            });
var format_label_10401050mlabel_104_12 = new ol.format.GeoJSON();
var features_label_10401050mlabel_104_12 = format_label_10401050mlabel_104_12.readFeatures(json_label_10401050mlabel_104_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10401050mlabel_104_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10401050mlabel_104_12.addFeatures(features_label_10401050mlabel_104_12);
var lyr_label_10401050mlabel_104_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10401050mlabel_104_12, 
                style: style_label_10401050mlabel_104_12,
                interactive: true,
                title: '<img src="styles/legend/label_10401050mlabel_104_12.png" /> label_104.0 - 105.0m — label_104'
            });
var format_label_10501060mlabel_105_13 = new ol.format.GeoJSON();
var features_label_10501060mlabel_105_13 = format_label_10501060mlabel_105_13.readFeatures(json_label_10501060mlabel_105_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10501060mlabel_105_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10501060mlabel_105_13.addFeatures(features_label_10501060mlabel_105_13);
var lyr_label_10501060mlabel_105_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10501060mlabel_105_13, 
                style: style_label_10501060mlabel_105_13,
                interactive: true,
                title: '<img src="styles/legend/label_10501060mlabel_105_13.png" /> label_105.0 - 106.0m — label_105'
            });
var format_label_10601070mlabel_106_14 = new ol.format.GeoJSON();
var features_label_10601070mlabel_106_14 = format_label_10601070mlabel_106_14.readFeatures(json_label_10601070mlabel_106_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10601070mlabel_106_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10601070mlabel_106_14.addFeatures(features_label_10601070mlabel_106_14);
var lyr_label_10601070mlabel_106_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10601070mlabel_106_14, 
                style: style_label_10601070mlabel_106_14,
                interactive: true,
                title: '<img src="styles/legend/label_10601070mlabel_106_14.png" /> label_106.0 - 107.0m — label_106'
            });
var format_label_10701080mlabel_107_15 = new ol.format.GeoJSON();
var features_label_10701080mlabel_107_15 = format_label_10701080mlabel_107_15.readFeatures(json_label_10701080mlabel_107_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10701080mlabel_107_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10701080mlabel_107_15.addFeatures(features_label_10701080mlabel_107_15);
var lyr_label_10701080mlabel_107_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10701080mlabel_107_15, 
                style: style_label_10701080mlabel_107_15,
                interactive: true,
                title: '<img src="styles/legend/label_10701080mlabel_107_15.png" /> label_107.0 - 108.0m — label_107'
            });
var format_label_10801090mlabel_108_16 = new ol.format.GeoJSON();
var features_label_10801090mlabel_108_16 = format_label_10801090mlabel_108_16.readFeatures(json_label_10801090mlabel_108_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10801090mlabel_108_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10801090mlabel_108_16.addFeatures(features_label_10801090mlabel_108_16);
var lyr_label_10801090mlabel_108_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10801090mlabel_108_16, 
                style: style_label_10801090mlabel_108_16,
                interactive: true,
                title: '<img src="styles/legend/label_10801090mlabel_108_16.png" /> label_108.0 - 109.0m — label_108'
            });
var format_label_10901100mlabel_109_17 = new ol.format.GeoJSON();
var features_label_10901100mlabel_109_17 = format_label_10901100mlabel_109_17.readFeatures(json_label_10901100mlabel_109_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_10901100mlabel_109_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_10901100mlabel_109_17.addFeatures(features_label_10901100mlabel_109_17);
var lyr_label_10901100mlabel_109_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_10901100mlabel_109_17, 
                style: style_label_10901100mlabel_109_17,
                interactive: true,
                title: '<img src="styles/legend/label_10901100mlabel_109_17.png" /> label_109.0 - 110.0m — label_109'
            });
var format_label_11001110mlabel_110_18 = new ol.format.GeoJSON();
var features_label_11001110mlabel_110_18 = format_label_11001110mlabel_110_18.readFeatures(json_label_11001110mlabel_110_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11001110mlabel_110_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11001110mlabel_110_18.addFeatures(features_label_11001110mlabel_110_18);
var lyr_label_11001110mlabel_110_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11001110mlabel_110_18, 
                style: style_label_11001110mlabel_110_18,
                interactive: true,
                title: '<img src="styles/legend/label_11001110mlabel_110_18.png" /> label_110.0 - 111.0m — label_110'
            });
var format_label_11101120mlabel_111_19 = new ol.format.GeoJSON();
var features_label_11101120mlabel_111_19 = format_label_11101120mlabel_111_19.readFeatures(json_label_11101120mlabel_111_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11101120mlabel_111_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11101120mlabel_111_19.addFeatures(features_label_11101120mlabel_111_19);
var lyr_label_11101120mlabel_111_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11101120mlabel_111_19, 
                style: style_label_11101120mlabel_111_19,
                interactive: true,
                title: '<img src="styles/legend/label_11101120mlabel_111_19.png" /> label_111.0 - 112.0m — label_111'
            });
var format_label_11201130mlabel_112_20 = new ol.format.GeoJSON();
var features_label_11201130mlabel_112_20 = format_label_11201130mlabel_112_20.readFeatures(json_label_11201130mlabel_112_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11201130mlabel_112_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11201130mlabel_112_20.addFeatures(features_label_11201130mlabel_112_20);
var lyr_label_11201130mlabel_112_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11201130mlabel_112_20, 
                style: style_label_11201130mlabel_112_20,
                interactive: true,
                title: '<img src="styles/legend/label_11201130mlabel_112_20.png" /> label_112.0 - 113.0m — label_112'
            });
var format_label_11301140mlabel_113_21 = new ol.format.GeoJSON();
var features_label_11301140mlabel_113_21 = format_label_11301140mlabel_113_21.readFeatures(json_label_11301140mlabel_113_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11301140mlabel_113_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11301140mlabel_113_21.addFeatures(features_label_11301140mlabel_113_21);
var lyr_label_11301140mlabel_113_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11301140mlabel_113_21, 
                style: style_label_11301140mlabel_113_21,
                interactive: true,
                title: '<img src="styles/legend/label_11301140mlabel_113_21.png" /> label_113.0 - 114.0m — label_113'
            });
var format_label_11401150mlabel_114_22 = new ol.format.GeoJSON();
var features_label_11401150mlabel_114_22 = format_label_11401150mlabel_114_22.readFeatures(json_label_11401150mlabel_114_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11401150mlabel_114_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11401150mlabel_114_22.addFeatures(features_label_11401150mlabel_114_22);
var lyr_label_11401150mlabel_114_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11401150mlabel_114_22, 
                style: style_label_11401150mlabel_114_22,
                interactive: true,
                title: '<img src="styles/legend/label_11401150mlabel_114_22.png" /> label_114.0 - 115.0m — label_114'
            });
var format_label_11501160mlabel_115_23 = new ol.format.GeoJSON();
var features_label_11501160mlabel_115_23 = format_label_11501160mlabel_115_23.readFeatures(json_label_11501160mlabel_115_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11501160mlabel_115_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11501160mlabel_115_23.addFeatures(features_label_11501160mlabel_115_23);
var lyr_label_11501160mlabel_115_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11501160mlabel_115_23, 
                style: style_label_11501160mlabel_115_23,
                interactive: true,
                title: '<img src="styles/legend/label_11501160mlabel_115_23.png" /> label_115.0 - 116.0m — label_115'
            });
var format_label_11601170mlabel_116_24 = new ol.format.GeoJSON();
var features_label_11601170mlabel_116_24 = format_label_11601170mlabel_116_24.readFeatures(json_label_11601170mlabel_116_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11601170mlabel_116_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11601170mlabel_116_24.addFeatures(features_label_11601170mlabel_116_24);
var lyr_label_11601170mlabel_116_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11601170mlabel_116_24, 
                style: style_label_11601170mlabel_116_24,
                interactive: true,
                title: '<img src="styles/legend/label_11601170mlabel_116_24.png" /> label_116.0 - 117.0m — label_116'
            });
var format_label_11701180mlabel_117_25 = new ol.format.GeoJSON();
var features_label_11701180mlabel_117_25 = format_label_11701180mlabel_117_25.readFeatures(json_label_11701180mlabel_117_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11701180mlabel_117_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11701180mlabel_117_25.addFeatures(features_label_11701180mlabel_117_25);
var lyr_label_11701180mlabel_117_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11701180mlabel_117_25, 
                style: style_label_11701180mlabel_117_25,
                interactive: true,
                title: '<img src="styles/legend/label_11701180mlabel_117_25.png" /> label_117.0 - 118.0m — label_117'
            });
var format_label_11801190mlabel_118_26 = new ol.format.GeoJSON();
var features_label_11801190mlabel_118_26 = format_label_11801190mlabel_118_26.readFeatures(json_label_11801190mlabel_118_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11801190mlabel_118_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11801190mlabel_118_26.addFeatures(features_label_11801190mlabel_118_26);
var lyr_label_11801190mlabel_118_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11801190mlabel_118_26, 
                style: style_label_11801190mlabel_118_26,
                interactive: true,
                title: '<img src="styles/legend/label_11801190mlabel_118_26.png" /> label_118.0 - 119.0m — label_118'
            });
var format_label_11901200mlabel_119_27 = new ol.format.GeoJSON();
var features_label_11901200mlabel_119_27 = format_label_11901200mlabel_119_27.readFeatures(json_label_11901200mlabel_119_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_11901200mlabel_119_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_11901200mlabel_119_27.addFeatures(features_label_11901200mlabel_119_27);
var lyr_label_11901200mlabel_119_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_11901200mlabel_119_27, 
                style: style_label_11901200mlabel_119_27,
                interactive: true,
                title: '<img src="styles/legend/label_11901200mlabel_119_27.png" /> label_119.0 - 120.0m — label_119'
            });
var format_label_12001210mlabel_120_28 = new ol.format.GeoJSON();
var features_label_12001210mlabel_120_28 = format_label_12001210mlabel_120_28.readFeatures(json_label_12001210mlabel_120_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_12001210mlabel_120_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_12001210mlabel_120_28.addFeatures(features_label_12001210mlabel_120_28);
var lyr_label_12001210mlabel_120_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_12001210mlabel_120_28, 
                style: style_label_12001210mlabel_120_28,
                interactive: true,
                title: '<img src="styles/legend/label_12001210mlabel_120_28.png" /> label_120.0 - 121.0m — label_120'
            });
var format_label_12101220mlabel_121_29 = new ol.format.GeoJSON();
var features_label_12101220mlabel_121_29 = format_label_12101220mlabel_121_29.readFeatures(json_label_12101220mlabel_121_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_12101220mlabel_121_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_12101220mlabel_121_29.addFeatures(features_label_12101220mlabel_121_29);
var lyr_label_12101220mlabel_121_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_12101220mlabel_121_29, 
                style: style_label_12101220mlabel_121_29,
                interactive: true,
                title: '<img src="styles/legend/label_12101220mlabel_121_29.png" /> label_121.0 - 122.0m — label_121'
            });
var format_label_12201230mlabel_122_30 = new ol.format.GeoJSON();
var features_label_12201230mlabel_122_30 = format_label_12201230mlabel_122_30.readFeatures(json_label_12201230mlabel_122_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_12201230mlabel_122_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_12201230mlabel_122_30.addFeatures(features_label_12201230mlabel_122_30);
var lyr_label_12201230mlabel_122_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_12201230mlabel_122_30, 
                style: style_label_12201230mlabel_122_30,
                interactive: true,
                title: '<img src="styles/legend/label_12201230mlabel_122_30.png" /> label_122.0 - 123.0m — label_122'
            });
var format_label_12301240mlabel_123_31 = new ol.format.GeoJSON();
var features_label_12301240mlabel_123_31 = format_label_12301240mlabel_123_31.readFeatures(json_label_12301240mlabel_123_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_label_12301240mlabel_123_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_label_12301240mlabel_123_31.addFeatures(features_label_12301240mlabel_123_31);
var lyr_label_12301240mlabel_123_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_label_12301240mlabel_123_31, 
                style: style_label_12301240mlabel_123_31,
                interactive: true,
                title: '<img src="styles/legend/label_12301240mlabel_123_31.png" /> label_123.0 - 124.0m — label_123'
            });
var format_DrillingPlanPriorityUnspecified_32 = new ol.format.GeoJSON();
var features_DrillingPlanPriorityUnspecified_32 = format_DrillingPlanPriorityUnspecified_32.readFeatures(json_DrillingPlanPriorityUnspecified_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriorityUnspecified_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriorityUnspecified_32.addFeatures(features_DrillingPlanPriorityUnspecified_32);
var lyr_DrillingPlanPriorityUnspecified_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriorityUnspecified_32, 
                style: style_DrillingPlanPriorityUnspecified_32,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriorityUnspecified_32.png" /> Drilling Plan Priority Unspecified'
            });
var format_DrillingPlanPriority5_33 = new ol.format.GeoJSON();
var features_DrillingPlanPriority5_33 = format_DrillingPlanPriority5_33.readFeatures(json_DrillingPlanPriority5_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriority5_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriority5_33.addFeatures(features_DrillingPlanPriority5_33);
var lyr_DrillingPlanPriority5_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriority5_33, 
                style: style_DrillingPlanPriority5_33,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriority5_33.png" /> Drilling Plan Priority 5'
            });
var format_DrillingPlanPriority4_34 = new ol.format.GeoJSON();
var features_DrillingPlanPriority4_34 = format_DrillingPlanPriority4_34.readFeatures(json_DrillingPlanPriority4_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriority4_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriority4_34.addFeatures(features_DrillingPlanPriority4_34);
var lyr_DrillingPlanPriority4_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriority4_34, 
                style: style_DrillingPlanPriority4_34,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriority4_34.png" /> Drilling Plan Priority 4'
            });
var format_DrillingPlanPriority3_35 = new ol.format.GeoJSON();
var features_DrillingPlanPriority3_35 = format_DrillingPlanPriority3_35.readFeatures(json_DrillingPlanPriority3_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriority3_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriority3_35.addFeatures(features_DrillingPlanPriority3_35);
var lyr_DrillingPlanPriority3_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriority3_35, 
                style: style_DrillingPlanPriority3_35,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriority3_35.png" /> Drilling Plan Priority 3'
            });
var format_DrillingPlanPriority2_36 = new ol.format.GeoJSON();
var features_DrillingPlanPriority2_36 = format_DrillingPlanPriority2_36.readFeatures(json_DrillingPlanPriority2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriority2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriority2_36.addFeatures(features_DrillingPlanPriority2_36);
var lyr_DrillingPlanPriority2_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriority2_36, 
                style: style_DrillingPlanPriority2_36,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriority2_36.png" /> Drilling Plan Priority 2'
            });
var format_DrillingPlanPriority1_37 = new ol.format.GeoJSON();
var features_DrillingPlanPriority1_37 = format_DrillingPlanPriority1_37.readFeatures(json_DrillingPlanPriority1_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillingPlanPriority1_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillingPlanPriority1_37.addFeatures(features_DrillingPlanPriority1_37);
var lyr_DrillingPlanPriority1_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrillingPlanPriority1_37, 
                style: style_DrillingPlanPriority1_37,
                interactive: true,
                title: '<img src="styles/legend/DrillingPlanPriority1_37.png" /> Drilling Plan Priority 1'
            });
var format_DisturbanceOutline_38 = new ol.format.GeoJSON();
var features_DisturbanceOutline_38 = format_DisturbanceOutline_38.readFeatures(json_DisturbanceOutline_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DisturbanceOutline_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_38.addFeatures(features_DisturbanceOutline_38);
var lyr_DisturbanceOutline_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DisturbanceOutline_38, 
                style: style_DisturbanceOutline_38,
                interactive: true,
                title: '<img src="styles/legend/DisturbanceOutline_38.png" /> Disturbance Outline'
            });
var format_HistoricDrillholes_39 = new ol.format.GeoJSON();
var features_HistoricDrillholes_39 = format_HistoricDrillholes_39.readFeatures(json_HistoricDrillholes_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricDrillholes_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricDrillholes_39.addFeatures(features_HistoricDrillholes_39);
var lyr_HistoricDrillholes_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricDrillholes_39, 
                style: style_HistoricDrillholes_39,
                interactive: true,
                title: '<img src="styles/legend/HistoricDrillholes_39.png" /> Historic Drillholes'
            });
var group_DrillingPlan = new ol.layer.Group({
                                layers: [lyr_DrillingPlanPriorityUnspecified_32,lyr_DrillingPlanPriority5_33,lyr_DrillingPlanPriority4_34,lyr_DrillingPlanPriority3_35,lyr_DrillingPlanPriority2_36,lyr_DrillingPlanPriority1_37,],
                                title: "Drilling Plan"});
var group_T2TopSurface = new ol.layer.Group({
                                layers: [lyr_label_940950mlabel_94_2,lyr_label_950960mlabel_95_3,lyr_label_960970mlabel_96_4,lyr_label_970980mlabel_97_5,lyr_label_980990mlabel_98_6,lyr_label_9901000mlabel_99_7,lyr_label_10001010mlabel_100_8,lyr_label_10101020mlabel_101_9,lyr_label_10201030mlabel_102_10,lyr_label_10301040mlabel_103_11,lyr_label_10401050mlabel_104_12,lyr_label_10501060mlabel_105_13,lyr_label_10601070mlabel_106_14,lyr_label_10701080mlabel_107_15,lyr_label_10801090mlabel_108_16,lyr_label_10901100mlabel_109_17,lyr_label_11001110mlabel_110_18,lyr_label_11101120mlabel_111_19,lyr_label_11201130mlabel_112_20,lyr_label_11301140mlabel_113_21,lyr_label_11401150mlabel_114_22,lyr_label_11501160mlabel_115_23,lyr_label_11601170mlabel_116_24,lyr_label_11701180mlabel_117_25,lyr_label_11801190mlabel_118_26,lyr_label_11901200mlabel_119_27,lyr_label_12001210mlabel_120_28,lyr_label_12101220mlabel_121_29,lyr_label_12201230mlabel_122_30,lyr_label_12301240mlabel_123_31,],
                                title: "T2 Top Surface"});
var group_Image = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_20240130_RGB_1,],
                                title: "Image"});

lyr_GoogleSatellite_0.setVisible(true);lyr_20240130_RGB_1.setVisible(true);lyr_label_940950mlabel_94_2.setVisible(true);lyr_label_950960mlabel_95_3.setVisible(true);lyr_label_960970mlabel_96_4.setVisible(true);lyr_label_970980mlabel_97_5.setVisible(true);lyr_label_980990mlabel_98_6.setVisible(true);lyr_label_9901000mlabel_99_7.setVisible(true);lyr_label_10001010mlabel_100_8.setVisible(true);lyr_label_10101020mlabel_101_9.setVisible(true);lyr_label_10201030mlabel_102_10.setVisible(true);lyr_label_10301040mlabel_103_11.setVisible(true);lyr_label_10401050mlabel_104_12.setVisible(true);lyr_label_10501060mlabel_105_13.setVisible(true);lyr_label_10601070mlabel_106_14.setVisible(true);lyr_label_10701080mlabel_107_15.setVisible(true);lyr_label_10801090mlabel_108_16.setVisible(true);lyr_label_10901100mlabel_109_17.setVisible(true);lyr_label_11001110mlabel_110_18.setVisible(true);lyr_label_11101120mlabel_111_19.setVisible(true);lyr_label_11201130mlabel_112_20.setVisible(true);lyr_label_11301140mlabel_113_21.setVisible(true);lyr_label_11401150mlabel_114_22.setVisible(true);lyr_label_11501160mlabel_115_23.setVisible(true);lyr_label_11601170mlabel_116_24.setVisible(true);lyr_label_11701180mlabel_117_25.setVisible(true);lyr_label_11801190mlabel_118_26.setVisible(true);lyr_label_11901200mlabel_119_27.setVisible(true);lyr_label_12001210mlabel_120_28.setVisible(true);lyr_label_12101220mlabel_121_29.setVisible(true);lyr_label_12201230mlabel_122_30.setVisible(true);lyr_label_12301240mlabel_123_31.setVisible(true);lyr_DrillingPlanPriorityUnspecified_32.setVisible(true);lyr_DrillingPlanPriority5_33.setVisible(true);lyr_DrillingPlanPriority4_34.setVisible(true);lyr_DrillingPlanPriority3_35.setVisible(true);lyr_DrillingPlanPriority2_36.setVisible(true);lyr_DrillingPlanPriority1_37.setVisible(true);lyr_DisturbanceOutline_38.setVisible(true);lyr_HistoricDrillholes_39.setVisible(true);
var layersList = [group_Image,group_T2TopSurface,group_DrillingPlan,lyr_DisturbanceOutline_38,lyr_HistoricDrillholes_39];
lyr_label_940950mlabel_94_2.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_950960mlabel_95_3.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_960970mlabel_96_4.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_970980mlabel_97_5.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_980990mlabel_98_6.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_9901000mlabel_99_7.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10001010mlabel_100_8.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10101020mlabel_101_9.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10201030mlabel_102_10.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10301040mlabel_103_11.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10401050mlabel_104_12.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10501060mlabel_105_13.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10601070mlabel_106_14.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10701080mlabel_107_15.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10801090mlabel_108_16.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_10901100mlabel_109_17.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11001110mlabel_110_18.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11101120mlabel_111_19.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11201130mlabel_112_20.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11301140mlabel_113_21.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11401150mlabel_114_22.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11501160mlabel_115_23.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11601170mlabel_116_24.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11701180mlabel_117_25.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11801190mlabel_118_26.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_11901200mlabel_119_27.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_12001210mlabel_120_28.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_12101220mlabel_121_29.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_12201230mlabel_122_30.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_label_12301240mlabel_123_31.set('fieldAliases', {'fid': 'fid', 'ZP_min': 'ZP_min', 'ZP_max': 'ZP_max', 'label': 'label', });
lyr_DrillingPlanPriorityUnspecified_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DrillingPlanPriority5_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DrillingPlanPriority4_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DrillingPlanPriority3_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DrillingPlanPriority2_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DrillingPlanPriority1_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'priority': 'priority', 'x': 'x', 'y': 'y', 'priority_2': 'priority_2', 'depth1': 'depth1', });
lyr_DisturbanceOutline_38.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'permit number': 'permit number', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_HistoricDrillholes_39.set('fieldAliases', {'hole_id': 'hole_id', 'orig_east': 'orig_east', 'orig_north': 'orig_north', 'hole_type': 'hole_type', 'max_depth': 'max_depth', 'orig_grid_id': 'orig_grid_id', 'orig_rl': 'orig_rl', 'orig_survey_method': 'orig_survey_method', 'orig_sur': 'orig_sur', 'orig_survey_by': 'orig_survey_by', 'orig_survey_company': 'orig_survey_company', 'nat_grid_id': 'nat_grid_id', 'nat_east': 'nat_east', 'nat_north': 'nat_north', 'nat_rl': 'nat_rl', 'nat_survey_method': 'nat_survey_method', 'll_grid_id': 'll_grid_id', 'll_lat': 'll_lat', 'll_long': 'll_long', 'll_rl': 'll_rl', 'lease_id': 'lease_id', 'prospect': 'prospect', 'date_start': 'date_start', 'date_completed': 'date_completed', 'pow_id': 'pow_id', 'data_source': 'data_source', 'comments': 'comments', });
lyr_label_940950mlabel_94_2.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_950960mlabel_95_3.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_960970mlabel_96_4.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_970980mlabel_97_5.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_980990mlabel_98_6.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_9901000mlabel_99_7.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10001010mlabel_100_8.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10101020mlabel_101_9.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10201030mlabel_102_10.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10301040mlabel_103_11.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10401050mlabel_104_12.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10501060mlabel_105_13.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10601070mlabel_106_14.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10701080mlabel_107_15.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10801090mlabel_108_16.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_10901100mlabel_109_17.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11001110mlabel_110_18.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11101120mlabel_111_19.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11201130mlabel_112_20.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11301140mlabel_113_21.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11401150mlabel_114_22.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11501160mlabel_115_23.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11601170mlabel_116_24.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11701180mlabel_117_25.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11801190mlabel_118_26.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_11901200mlabel_119_27.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_12001210mlabel_120_28.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_12101220mlabel_121_29.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_12201230mlabel_122_30.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_label_12301240mlabel_123_31.set('fieldImages', {'fid': 'TextEdit', 'ZP_min': 'TextEdit', 'ZP_max': 'TextEdit', 'label': 'TextEdit', });
lyr_DrillingPlanPriorityUnspecified_32.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DrillingPlanPriority5_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DrillingPlanPriority4_34.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DrillingPlanPriority3_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DrillingPlanPriority2_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DrillingPlanPriority1_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'priority': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'priority_2': 'Range', 'depth1': 'TextEdit', });
lyr_DisturbanceOutline_38.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', 'land use': 'TextEdit', 'description': 'TextEdit', 'tenement': 'TextEdit', 'date cleared': 'DateTime', 'mrf category': 'TextEdit', 'permit number': 'TextEdit', 'area (ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_HistoricDrillholes_39.set('fieldImages', {'hole_id': 'TextEdit', 'orig_east': 'TextEdit', 'orig_north': 'TextEdit', 'hole_type': 'TextEdit', 'max_depth': 'TextEdit', 'orig_grid_id': 'TextEdit', 'orig_rl': 'TextEdit', 'orig_survey_method': 'TextEdit', 'orig_sur': 'TextEdit', 'orig_survey_by': 'TextEdit', 'orig_survey_company': 'TextEdit', 'nat_grid_id': 'TextEdit', 'nat_east': 'TextEdit', 'nat_north': 'TextEdit', 'nat_rl': 'TextEdit', 'nat_survey_method': 'TextEdit', 'll_grid_id': 'TextEdit', 'll_lat': 'TextEdit', 'll_long': 'TextEdit', 'll_rl': 'TextEdit', 'lease_id': 'TextEdit', 'prospect': 'TextEdit', 'date_start': 'TextEdit', 'date_completed': 'TextEdit', 'pow_id': 'TextEdit', 'data_source': 'TextEdit', 'comments': 'TextEdit', });
lyr_label_940950mlabel_94_2.set('fieldLabels', {});
lyr_label_950960mlabel_95_3.set('fieldLabels', {});
lyr_label_960970mlabel_96_4.set('fieldLabels', {});
lyr_label_970980mlabel_97_5.set('fieldLabels', {});
lyr_label_980990mlabel_98_6.set('fieldLabels', {});
lyr_label_9901000mlabel_99_7.set('fieldLabels', {});
lyr_label_10001010mlabel_100_8.set('fieldLabels', {});
lyr_label_10101020mlabel_101_9.set('fieldLabels', {});
lyr_label_10201030mlabel_102_10.set('fieldLabels', {});
lyr_label_10301040mlabel_103_11.set('fieldLabels', {});
lyr_label_10401050mlabel_104_12.set('fieldLabels', {});
lyr_label_10501060mlabel_105_13.set('fieldLabels', {});
lyr_label_10601070mlabel_106_14.set('fieldLabels', {});
lyr_label_10701080mlabel_107_15.set('fieldLabels', {});
lyr_label_10801090mlabel_108_16.set('fieldLabels', {});
lyr_label_10901100mlabel_109_17.set('fieldLabels', {});
lyr_label_11001110mlabel_110_18.set('fieldLabels', {});
lyr_label_11101120mlabel_111_19.set('fieldLabels', {});
lyr_label_11201130mlabel_112_20.set('fieldLabels', {});
lyr_label_11301140mlabel_113_21.set('fieldLabels', {});
lyr_label_11401150mlabel_114_22.set('fieldLabels', {});
lyr_label_11501160mlabel_115_23.set('fieldLabels', {});
lyr_label_11601170mlabel_116_24.set('fieldLabels', {});
lyr_label_11701180mlabel_117_25.set('fieldLabels', {});
lyr_label_11801190mlabel_118_26.set('fieldLabels', {});
lyr_label_11901200mlabel_119_27.set('fieldLabels', {});
lyr_label_12001210mlabel_120_28.set('fieldLabels', {});
lyr_label_12101220mlabel_121_29.set('fieldLabels', {});
lyr_label_12201230mlabel_122_30.set('fieldLabels', {});
lyr_label_12301240mlabel_123_31.set('fieldLabels', {});
lyr_DrillingPlanPriorityUnspecified_32.set('fieldLabels', {});
lyr_DrillingPlanPriority5_33.set('fieldLabels', {});
lyr_DrillingPlanPriority4_34.set('fieldLabels', {});
lyr_DrillingPlanPriority3_35.set('fieldLabels', {});
lyr_DrillingPlanPriority2_36.set('fieldLabels', {});
lyr_DrillingPlanPriority1_37.set('fieldLabels', {});
lyr_DisturbanceOutline_38.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'name': 'hidden field', 'land use': 'hidden field', 'description': 'hidden field', 'tenement': 'hidden field', 'date cleared': 'hidden field', 'mrf category': 'hidden field', 'permit number': 'hidden field', 'area (ha)': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_HistoricDrillholes_39.set('fieldLabels', {'hole_id': 'inline label - visible with data', 'orig_east': 'inline label - always visible', 'orig_north': 'inline label - always visible', 'hole_type': 'inline label - always visible', 'max_depth': 'inline label - always visible', 'orig_grid_id': 'hidden field', 'orig_rl': 'hidden field', 'orig_survey_method': 'hidden field', 'orig_sur': 'inline label - always visible', 'orig_survey_by': 'hidden field', 'orig_survey_company': 'hidden field', 'nat_grid_id': 'hidden field', 'nat_east': 'hidden field', 'nat_north': 'hidden field', 'nat_rl': 'hidden field', 'nat_survey_method': 'hidden field', 'll_grid_id': 'hidden field', 'll_lat': 'hidden field', 'll_long': 'hidden field', 'll_rl': 'hidden field', 'lease_id': 'hidden field', 'prospect': 'hidden field', 'date_start': 'hidden field', 'date_completed': 'hidden field', 'pow_id': 'hidden field', 'data_source': 'hidden field', 'comments': 'hidden field', });
lyr_HistoricDrillholes_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});