var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_gadm41_BFA_2_1 = new ol.format.GeoJSON();
var features_gadm41_BFA_2_1 = format_gadm41_BFA_2_1.readFeatures(json_gadm41_BFA_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_BFA_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_BFA_2_1.addFeatures(features_gadm41_BFA_2_1);
var lyr_gadm41_BFA_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_BFA_2_1, 
                style: style_gadm41_BFA_2_1,
                popuplayertitle: 'gadm41_BFA_2',
                interactive: true,
                title: '<img src="styles/legend/gadm41_BFA_2_1.png" /> gadm41_BFA_2'
            });
var format_PROVINCE2gadm41_bfa_2_2 = new ol.format.GeoJSON();
var features_PROVINCE2gadm41_bfa_2_2 = format_PROVINCE2gadm41_bfa_2_2.readFeatures(json_PROVINCE2gadm41_bfa_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCE2gadm41_bfa_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCE2gadm41_bfa_2_2.addFeatures(features_PROVINCE2gadm41_bfa_2_2);
var lyr_PROVINCE2gadm41_bfa_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCE2gadm41_bfa_2_2, 
                style: style_PROVINCE2gadm41_bfa_2_2,
                popuplayertitle: 'PROVINCE2 — gadm41_bfa_2',
                interactive: true,
    title: 'PROVINCE2 — gadm41_bfa_2<br />\
    <img src="styles/legend/PROVINCE2gadm41_bfa_2_2_0.png" /> 70036 - 401507<br />\
    <img src="styles/legend/PROVINCE2gadm41_bfa_2_2_1.png" /> 401507 - 732978<br />\
    <img src="styles/legend/PROVINCE2gadm41_bfa_2_2_2.png" /> 732978 - 1064448<br />\
    <img src="styles/legend/PROVINCE2gadm41_bfa_2_2_3.png" /> 1064448 - 1395919<br />\
    <img src="styles/legend/PROVINCE2gadm41_bfa_2_2_4.png" /> 1395919 - 1727390<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_gadm41_BFA_2_1.setVisible(true);lyr_PROVINCE2gadm41_bfa_2_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_gadm41_BFA_2_1,lyr_PROVINCE2gadm41_bfa_2_2];
lyr_gadm41_BFA_2_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'POP_1_POP2006': 'POP_1_POP2006', });
lyr_PROVINCE2gadm41_bfa_2_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'POP_1_POP2006': 'POP_1_POP2006', });
lyr_gadm41_BFA_2_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'POP_1_POP2006': 'DateTime', });
lyr_PROVINCE2gadm41_bfa_2_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'POP_1_POP2006': 'Range', });
lyr_gadm41_BFA_2_1.set('fieldLabels', {'COUNTRY': 'header label - visible with data', 'NAME_2': 'header label - visible with data', 'POP_1_POP2006': 'no label', });
lyr_PROVINCE2gadm41_bfa_2_2.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'inline label - always visible', 'NAME_2': 'inline label - always visible', 'POP_1_POP2006': 'no label', });
lyr_PROVINCE2gadm41_bfa_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});