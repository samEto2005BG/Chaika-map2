ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7801").setExtent([697345.808907, 4789038.537703, 699175.728243, 4789993.697709]);
var wms_layers = [];


        var lyr_XYZLayer_0 = new ol.layer.Tile({
            'title': 'XYZ Layer',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_III_1 = new ol.format.GeoJSON();
var features_III_1 = format_III_1.readFeatures(json_III_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_III_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_III_1.addFeatures(features_III_1);
var lyr_III_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_III_1, 
                style: style_III_1,
                popuplayertitle: 'Улици III',
                interactive: false,
                title: '<img src="styles/legend/III_1.png" /> Улици III'
            });
var format_IV_2 = new ol.format.GeoJSON();
var features_IV_2 = format_IV_2.readFeatures(json_IV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_IV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IV_2.addFeatures(features_IV_2);
var lyr_IV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IV_2, 
                style: style_IV_2,
                popuplayertitle: 'Улици IV',
                interactive: false,
                title: '<img src="styles/legend/IV_2.png" /> Улици IV'
            });
var format_II_3 = new ol.format.GeoJSON();
var features_II_3 = format_II_3.readFeatures(json_II_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_II_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_II_3.addFeatures(features_II_3);
var lyr_II_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_II_3, 
                style: style_II_3,
                popuplayertitle: 'Улици II',
                interactive: false,
                title: '<img src="styles/legend/II_3.png" /> Улици II'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Алеи',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Алеи'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Тротоари и закрити площи',
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Тротоари и закрити площи'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Улично озеленяване',
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> Улично озеленяване'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Озеленяване в имоти',
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> Озеленяване в имоти'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: 'Сгради Чайка',
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> Сгради Чайка'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: 'Съдебни решения',
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> Съдебни решения'
            });

lyr_XYZLayer_0.setVisible(true);lyr_III_1.setVisible(true);lyr_IV_2.setVisible(true);lyr_II_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);
var layersList = [lyr_XYZLayer_0,lyr_III_1,lyr_IV_2,lyr_II_3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9];
lyr_III_1.set('fieldAliases', {'fid': 'fid', });
lyr_IV_2.set('fieldAliases', {'fid': 'fid', });
lyr_II_3.set('fieldAliases', {'fid': 'fid', });
lyr__4.set('fieldAliases', {'fid': 'fid', });
lyr__5.set('fieldAliases', {'fid': 'fid', });
lyr__6.set('fieldAliases', {'fid': 'fid', });
lyr__7.set('fieldAliases', {'fid': 'fid', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIM': 'PERIM', 'appcount': 'appcount', 'cadbuild': 'cadbuild', 'cadimm': 'cadimm', 'cadnum': 'cadnum', 'cadreg': 'cadreg', 'ekatte': 'ekatte', 'ekattefn': 'ekattefn', 'flrcount': 'flrcount', 'funccode': 'funccode', 'functype': 'functype', 'immaddr': 'immaddr', 'oldident': 'oldident', 'propcode': 'propcode', 'proptype': 'proptype', 'quarname': 'quarname', 'regname': 'regname', 'strename': 'strename', 'strnum': 'strnum', 'validate': 'validate', });
lyr__9.set('fieldAliases', {'fid': 'fid', 'Номер на адм. дело': 'Номер на адм. дело', 'Линк към адм. дело': 'Линк към адм. дело', });
lyr_III_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_IV_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_II_3.set('fieldImages', {'fid': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', });
lyr__7.set('fieldImages', {'fid': 'TextEdit', });
lyr__8.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIM': 'TextEdit', 'appcount': 'TextEdit', 'cadbuild': 'TextEdit', 'cadimm': 'TextEdit', 'cadnum': 'TextEdit', 'cadreg': 'TextEdit', 'ekatte': 'TextEdit', 'ekattefn': 'TextEdit', 'flrcount': 'TextEdit', 'funccode': 'TextEdit', 'functype': 'TextEdit', 'immaddr': 'TextEdit', 'oldident': 'TextEdit', 'propcode': 'TextEdit', 'proptype': 'TextEdit', 'quarname': 'TextEdit', 'regname': 'TextEdit', 'strename': 'TextEdit', 'strnum': 'TextEdit', 'validate': 'TextEdit', });
lyr__9.set('fieldImages', {'fid': 'TextEdit', 'Номер на адм. дело': 'TextEdit', 'Линк към адм. дело': 'TextEdit', });
lyr_III_1.set('fieldLabels', {'fid': 'no label', });
lyr_IV_2.set('fieldLabels', {'fid': 'no label', });
lyr_II_3.set('fieldLabels', {'fid': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', });
lyr__8.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIM': 'no label', 'appcount': 'no label', 'cadbuild': 'no label', 'cadimm': 'no label', 'cadnum': 'no label', 'cadreg': 'no label', 'ekatte': 'no label', 'ekattefn': 'no label', 'flrcount': 'no label', 'funccode': 'no label', 'functype': 'no label', 'immaddr': 'no label', 'oldident': 'no label', 'propcode': 'no label', 'proptype': 'no label', 'quarname': 'no label', 'regname': 'no label', 'strename': 'no label', 'strnum': 'no label', 'validate': 'no label', });
lyr__9.set('fieldLabels', {'fid': 'inline label - always visible', 'Номер на адм. дело': 'inline label - always visible', 'Линк към адм. дело': 'inline label - always visible', });
lyr__9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});