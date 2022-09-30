(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_808CE951_8C08_2D90_41D1_769C5122F732], 'cardboardAvailable')",
 "children": [
  "this.MainViewer",
  "this.IconButton_808CE951_8C08_2D90_41D1_769C5122F732",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "height": "100%",
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.43,
  "pitch": 0
 },
 "id": "camera_9E8DD2B5_8C08_7C90_41E0_5DBB392E3FB8",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.86,
  "pitch": 0
 },
 "id": "camera_9DBC416E_8C08_7DB1_41D4_A1E4A7D9335A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200142_456",
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "backwardYaw": 138.82,
   "yaw": 32.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
   "backwardYaw": 14.2,
   "yaw": 5.2,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
  "this.overlay_986DE224_88DE_74DC_416D_68498BA54455"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.12,
  "pitch": 0
 },
 "id": "camera_9C410E36_8C08_6791_41C2_E8DCE6FBCE27"
},
{
 "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_194942_647",
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "backwardYaw": 91.71,
   "yaw": -77.84,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "backwardYaw": -81.27,
   "yaw": 110.86,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
  "this.overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
  "this.overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
  "this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200301_218",
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
   "backwardYaw": 157.14,
   "yaw": -95.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "backwardYaw": 179.23,
   "yaw": 2.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
  "this.overlay_968E7734_843E_B62D_41E0_837FF5911C13",
  "this.popup_96593F33_843E_562B_41D0_385A5AB13213",
  "this.overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.2,
  "pitch": 0
 },
 "id": "camera_828033E4_8C08_7CB1_41D5_44FC6ABE98C9"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195620_442",
 "id": "panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "class": "ImageResource",
 "id": "ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.28,
  "pitch": 0
 },
 "id": "camera_9C7D7E74_8C08_6791_41D7_552C32AFF9A1"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.59,
  "pitch": 0
 },
 "id": "camera_9CAFEEC0_8C08_64F0_41CF_78703A239B64",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.97,
  "pitch": 0
 },
 "id": "camera_9CE89F38_8C08_6591_41C0_A7775015294D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_96593F33_843E_562B_41D0_385A5AB13213",
 "yaw": 89.87,
 "popupDistance": 100,
 "hfov": 7.1,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 2.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.8,
  "pitch": 0
 },
 "id": "camera_9D0BDF8C_8C08_6571_41BB_C848A88FAA49",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.63,
  "pitch": 0
 },
 "id": "camera_829F2414_8C08_7B90_41C1_2CFC487C4498",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_194857_352",
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "backwardYaw": 0.93,
   "yaw": 8.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
   "backwardYaw": 89.6,
   "yaw": -80.91,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
  "this.overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
  "this.overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
  "this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_808CE951_8C08_2D90_41D1_769C5122F732",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "gyroscopeEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.73,
  "pitch": 0
 },
 "id": "camera_9D147FD9_8C08_6490_41D0_BC7BB7687CA8"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.84,
  "pitch": 0
 },
 "id": "camera_82A41460_8C08_7BB0_41D4_1BFEE06A6991"
},
{
 "class": "ImageResource",
 "id": "ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195543_031",
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
   "backwardYaw": -0.53,
   "yaw": 105.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
   "backwardYaw": -162.94,
   "yaw": -75.39,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
  "this.overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
  "this.overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195231_019",
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "backwardYaw": 138.16,
   "yaw": -26.19,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "backwardYaw": 178.01,
   "yaw": -171.53,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
  "this.overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
  "this.overlay_94B756C0_84E6_7666_4193_67167020E744",
  "this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.73,
  "pitch": 0
 },
 "id": "camera_9C9C7EA0_8C08_64B1_41D0_1B2F381BD155",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.7,
  "pitch": 0
 },
 "id": "camera_9D7D50C3_8C08_7CF7_41D1_970CBCD59896"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.4,
  "pitch": 0
 },
 "id": "camera_9E0B81EA_8C08_7CB1_41C2_BAA550840EF5"
},
{
 "class": "ImageResource",
 "id": "ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195714_326",
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "backwardYaw": -104.03,
   "yaw": -49.09,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
  "this.overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.61,
  "pitch": 0
 },
 "id": "camera_9D8280EC_8C08_7CB1_41AC_293F5ADC77FD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.06,
  "pitch": 0
 },
 "id": "camera_9D63C09B_8C08_7C90_41DB_7B48AD4C02B6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
 "yaw": 7.17,
 "popupDistance": 100,
 "hfov": 14.42,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 8.52,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195404_934",
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.06,
  "pitch": 0
 },
 "id": "camera_9DE9F1BF_8C08_7C8F_41CA_A687DA14FAD6"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.91,
  "pitch": 0
 },
 "id": "camera_9DADB146_8C08_7DF0_41D1_E4EF081AF94D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.55,
  "pitch": 0
 },
 "id": "camera_9CBE9EDC_8C08_6491_41CC_3BD7BE5C9D80"
},
{
 "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195317_218",
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
   "backwardYaw": -171.72,
   "yaw": -2.94,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
   "backwardYaw": 3.16,
   "yaw": 177.88,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
  "this.overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A2C4EB_88DA_3D55_41D7_7372047FA8CC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 0)",
   "media": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.84,
  "pitch": 0
 },
 "id": "camera_9C21DE00_8C08_6771_41DE_E70B1C5AA980"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_9424979F_84EE_761B_41A5_CA2074F40C71",
 "yaw": -33.13,
 "popupDistance": 100,
 "hfov": 3.54,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 1.43,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.63,
  "pitch": 0
 },
 "id": "camera_9E147212_8C08_7F91_41C4_E2A80F643DDF"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195011_854",
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
   "backwardYaw": 88.45,
   "yaw": -88.3,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
   "backwardYaw": -77.84,
   "yaw": 91.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "backwardYaw": -43.27,
   "yaw": 140.86,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
  "this.overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
  "this.overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
  "this.overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
  "this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.77,
  "pitch": 0
 },
 "id": "camera_9DCF018F_8C08_7D70_41C3_E6577F1EAF9B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.89,
  "pitch": 0
 },
 "id": "camera_9C50CE45_8C08_67F3_41E0_477ABAC3A253"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.19,
  "pitch": 0
 },
 "id": "camera_82C89488_8C08_7B71_41C2_9E7EDC965E6A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195731_633",
 "id": "panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "backwardYaw": -0.12,
   "yaw": -2.57,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9165DE70_842A_7625_41CC_0834CAB935D3",
  "this.overlay_853502E2_88DA_7554_41C2_18211543FD11"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -4.09
 },
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera"
},
{
 "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200455_136",
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "backwardYaw": 31.57,
   "yaw": -113.44,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
  "this.overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
  "this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
  "this.overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
  "this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
 "yaw": -85.15,
 "popupDistance": 100,
 "hfov": 5.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 5.91,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_95B380BC_843A_AA1D_41B0_87F00960FA9F",
 "yaw": -46.07,
 "popupDistance": 100,
 "hfov": 4.03,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 4.09,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_9901F128_88EA_74D3_4199_EC59552DC909",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.47,
  "pitch": 0
 },
 "id": "camera_9D500072_8C08_7B91_41D3_C00463271C33",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_959A3FDA_8426_D665_41D4_57551BAB0C04",
 "yaw": 151.91,
 "popupDistance": 100,
 "hfov": 9.19,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 4.32,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.18,
  "pitch": 0
 },
 "id": "camera_9CFBDF61_8C08_65B3_41D9_A0B4A83F90B2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC",
 "yaw": 33.94,
 "popupDistance": 100,
 "hfov": 6.19,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -0.54,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.11,
  "pitch": 0
 },
 "id": "camera_9ECF3310_8C08_7D90_41D9_9EB2AEC1798F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.18,
  "pitch": 0
 },
 "id": "camera_9D92B11D_8C08_7D93_41D8_E4D4B579B21B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195602_730",
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195203_098",
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
   "backwardYaw": -171.53,
   "yaw": 178.01,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "backwardYaw": 140.86,
   "yaw": -43.27,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "backwardYaw": -178.27,
   "yaw": 0.91,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
  "this.overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
  "this.overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200208_780",
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "backwardYaw": -7.89,
   "yaw": -165.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
   "backwardYaw": 5.2,
   "yaw": 14.2,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
  "this.overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.55,
  "pitch": 0
 },
 "id": "camera_9DDE31AB_8C08_7CB7_41DD_8B27BEA17DC3"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.14,
  "pitch": 0
 },
 "id": "camera_9D31E020_8C08_7BB0_41DB_66E07D5AECCC"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.14,
  "pitch": 0
 },
 "id": "camera_9E402259_8C08_7F93_41DA_FCB53B7EE452"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E",
 "yaw": 120.29,
 "popupDistance": 100,
 "hfov": 8.66,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -1,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200226_063",
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
   "backwardYaw": -165.39,
   "yaw": -7.89,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
   "backwardYaw": 7.82,
   "yaw": -45.27,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
   "backwardYaw": -49.09,
   "yaw": -104.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
  "this.overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
  "this.overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195342_428",
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
   "backwardYaw": 177.88,
   "yaw": 3.16,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
  "this.overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
  "this.overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
  "this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.73,
  "pitch": 0
 },
 "id": "camera_9CDB6F06_8C08_6570_41DB_74F3DFCFB29A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.61,
  "pitch": 0
 },
 "id": "camera_9E7272A0_8C08_7CB1_41D1_B620CA03B0E6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.43,
  "pitch": 0
 },
 "id": "camera_9EAC82DD_8C08_7C93_41D3_A0F4D8C69220"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200347_680",
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
   "backwardYaw": -3.8,
   "yaw": 0.19,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
   "backwardYaw": 159.75,
   "yaw": 74.81,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36",
   "backwardYaw": 2.37,
   "yaw": 179.23,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9549F9DA_843A_DA65_417F_F6BF45FD6CB9",
  "this.overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
  "this.overlay_972C6E21_843E_5626_41D5_DD12A0A2F666"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.8,
  "pitch": 0
 },
 "id": "camera_9EDF632C_8C08_7DB1_41D5_6EDA253BE015",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.56,
  "pitch": 0
 },
 "id": "camera_82B2D474_8C08_7B91_41D7_7055E0F473DD"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9",
 "yaw": 13.28,
 "popupDistance": 100,
 "hfov": 14.36,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 9.92,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.09,
  "pitch": 0
 },
 "id": "camera_9E629282_8C08_7F71_41C7_BDF15D307EBC"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195656_668",
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.81,
  "pitch": 0
 },
 "id": "camera_9C63EE65_8C08_67B0_41E0_682D8C75A6BD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195505_944",
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
   "backwardYaw": -75.39,
   "yaw": -162.94,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.16,
  "pitch": 0
 },
 "id": "camera_9CC85EF1_8C08_6493_41AF_2E396B74F5C0"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.07,
  "pitch": 0
 },
 "id": "camera_9DF8F1D6_8C08_7C90_41AF_42A83EBBE54D"
},
{
 "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195250_878",
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "backwardYaw": 149.45,
   "yaw": -92.57,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
   "backwardYaw": -2.94,
   "yaw": -171.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_92ACFCCD_833A_F8A6_41A7_33F8602A4D4C",
  "this.overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
  "this.overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
  "this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.81,
  "pitch": 0
 },
 "id": "camera_9E0551FE_8C08_7C91_41D0_29028E442E40"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.73,
  "pitch": 0
 },
 "id": "camera_9D408047_8C08_7BFF_41DA_72E8A1442BF2"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195445_108",
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "backwardYaw": 74.81,
   "yaw": 159.75,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
  "this.overlay_9B253687_88DA_5DDC_41DA_B885E27834D7"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.98,
  "pitch": 0
 },
 "id": "camera_9EBC12FB_8C08_7C97_41C4_58D78FD675E1",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200325_715",
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "backwardYaw": 1.11,
   "yaw": 175.37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "backwardYaw": 0.19,
   "yaw": -3.8,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
  "this.overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
  "this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
  "this.overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "class": "ImageResource",
 "id": "ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200433_335",
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "backwardYaw": -83.16,
   "yaw": 167.12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
   "backwardYaw": -113.44,
   "yaw": 31.57,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
  "this.overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195747_016",
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E",
   "backwardYaw": -2.57,
   "yaw": -0.12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
   "backwardYaw": 32.45,
   "yaw": 138.82,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9153C18D_842A_AAFF_41D3_A3689DC7F1A5",
  "this.overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "class": "ImageResource",
 "id": "ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.99,
  "pitch": 0
 },
 "id": "camera_9C367E20_8C08_67B0_41BC_8E06220A82D3"
},
{
 "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195101_018",
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
   "backwardYaw": -92.57,
   "yaw": 149.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
   "backwardYaw": 110.86,
   "yaw": -81.27,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
   "backwardYaw": 8.06,
   "yaw": 0.93,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "backwardYaw": 0.91,
   "yaw": -178.27,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
  "this.overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
  "this.overlay_94421384_831A_28A6_41A7_963184D23B9D",
  "this.overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
  "this.overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
  "this.popup_9424979F_84EE_761B_41A5_CA2074F40C71"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_958305BA_84DE_6A25_41D2_D0594DD18ED0",
 "yaw": 53.02,
 "popupDistance": 100,
 "hfov": 5.2,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -1.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_990E1128_88EA_74D3_41BD_01424F88907F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.47,
  "pitch": 0
 },
 "id": "camera_9D26FFF9_8C08_6493_41E0_145BB9D2FA06"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.43,
  "pitch": 0
 },
 "id": "camera_9E366245_8C08_7FF3_41DB_8F3CAC747404"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.88,
  "pitch": 0
 },
 "id": "camera_8296142D_8C08_7BB3_41DC_B1D708DCE77C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.29,
  "pitch": 0
 },
 "id": "camera_9D1A8FB2_8C08_6491_41D7_67B34BE945B2"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.09,
  "pitch": 0
 },
 "id": "camera_82AE4449_8C08_7BF3_41D0_F24A26482823"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.94,
  "pitch": 0
 },
 "id": "camera_9E53D26E_8C08_7FB0_41D7_AB01D2A6180F"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_941056FE_84E7_F61D_41D0_E8887FE18F61",
 "yaw": -88.58,
 "popupDistance": 100,
 "hfov": 6.04,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 1.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.88,
  "pitch": 0
 },
 "id": "camera_9E24B231_8C08_7F93_41D1_93B0B360CF7E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.25,
  "pitch": 0
 },
 "id": "camera_829A03FB_8C08_7C90_41CD_1A1B715FD51E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.55,
  "pitch": 0
 },
 "id": "camera_9E9D02C9_8C08_7CF0_41D4_A4E2659C79AB",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF",
 "yaw": 83.54,
 "popupDistance": 100,
 "hfov": 11.28,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -0.75,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.84,
  "pitch": 0
 },
 "id": "camera_9C8C4E8C_8C08_6771_41D8_AC8C98847129"
},
{
 "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_194833_658",
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
   "backwardYaw": -80.91,
   "yaw": 89.6,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
  "this.overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
  "this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200410_458",
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
   "backwardYaw": -26.19,
   "yaw": 138.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
   "backwardYaw": 175.37,
   "yaw": 1.11,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "backwardYaw": 167.12,
   "yaw": -83.16,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
  "this.overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
  "this.overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_195523_846",
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
   "backwardYaw": 105.02,
   "yaw": -0.53,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2",
 "yaw": 89.27,
 "popupDistance": 100,
 "hfov": 10.95,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 2.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_194920_785",
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "backwardYaw": -88.3,
   "yaw": 88.45,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
  "this.overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
  "this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "20220924_200243_964",
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "backwardYaw": -45.27,
   "yaw": 7.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36",
   "backwardYaw": -95.41,
   "yaw": 157.14,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_97BAB650_842A_7665_41B3_698B0812037B",
  "this.overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera"
},
{
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_808CE951_8C08_2D90_41D1_769C5122F732",
 "backgroundOpacity": 0,
 "width": 56,
 "right": "3.26%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_808CE951_8C08_2D90_41D1_769C5122F732.png",
 "bottom": "5.31%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "maxWidth": 56,
 "horizontalAlign": "center",
 "height": 56,
 "maxHeight": 56,
 "shadow": false,
 "data": {
  "name": "IconButton14318"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "shadow": false,
 "data": {
  "name": "UIComponent3725"
 },
 "paddingTop": 0,
 "minHeight": 0
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "scaleMode": "custom",
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "visible": false,
 "shadow": false,
 "data": {
  "name": "ZoomImage3726"
 },
 "paddingTop": 0,
 "minHeight": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton3727"
 },
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "iconHeight": 20,
 "verticalAlign": "middle",
 "iconWidth": 20,
 "iconColor": "#000000",
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "layout": "horizontal",
 "top": 10,
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "borderSize": 0,
 "pressedIconColor": "#888888",
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "label": "",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontColor": "#FFFFFF",
 "visible": false,
 "shadow": false,
 "iconLineWidth": 5,
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "minHeight": 0,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_9D0BDF8C_8C08_6571_41BB_C848A88FAA49); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992EB0E3_88EA_7555_41D6_31A0C9CF6E88",
   "pitch": -22.91,
   "yaw": 5.2,
   "hfov": 19.38,
   "distance": 100
  }
 ],
 "id": "overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.91,
   "hfov": 19.38
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148, this.camera_9CFBDF61_8C08_65B3_41D9_A0B4A83F90B2); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992E90E3_88EA_7555_41E0_B36232C0BAC2",
   "pitch": -42.55,
   "yaw": 32.45,
   "hfov": 14.07,
   "distance": 50
  }
 ],
 "id": "overlay_986DE224_88DE_74DC_416D_68498BA54455",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -42.55,
   "hfov": 14.07
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_9D147FD9_8C08_6490_41D0_BC7BB7687CA8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968443D9_831A_68A1_41DB_A70FE79B17F7",
   "pitch": -16.16,
   "yaw": 110.86,
   "hfov": 15.72,
   "distance": 50
  }
 ],
 "id": "overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -16.16,
   "hfov": 15.72
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_9D1A8FB2_8C08_6491_41D7_67B34BE945B2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1AE15DD_83FA_28A1_41CF_49EB95B75601",
   "pitch": -16.36,
   "yaw": -77.84,
   "hfov": 20.19,
   "distance": 100
  }
 ],
 "id": "overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.36,
   "hfov": 20.19
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -46.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0_HS_2_0.png",
      "width": 68,
      "height": 59
     }
    ]
   },
   "pitch": 4.09
  }
 ],
 "id": "overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.09,
   "hfov": 4.03
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_9DCF018F_8C08_7D70_41C3_E6577F1EAF9B); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992040D3_88EA_7574_41DD_4435FF8968D3",
   "pitch": -21.2,
   "yaw": 2.37,
   "hfov": 14.43,
   "distance": 100
  }
 ],
 "id": "overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.2,
   "hfov": 14.43
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_96593F33_843E_562B_41D0_385A5AB13213, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0.png",
      "width": 120,
      "height": 101
     }
    ]
   },
   "pitch": 2.85
  }
 ],
 "id": "overlay_968E7734_843E_B62D_41E0_837FF5911C13",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 2.85,
   "hfov": 7.1
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_9DBC416E_8C08_7DB1_41D4_A1E4A7D9335A); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabled": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992090E3_88EA_7555_416D_AD58A6769921",
   "pitch": -4.58,
   "yaw": -95.41,
   "hfov": 11.21,
   "distance": 50
  }
 ],
 "id": "overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4",
 "data": {
  "label": "Arrow 05b Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.58,
   "hfov": 11.21
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_9DF8F1D6_8C08_7C90_41AF_42A83EBBE54D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9684E3D9_831A_68A1_41D4_3A863E1331E0",
   "pitch": -15.95,
   "yaw": 8.06,
   "hfov": 20.23,
   "distance": 100
  }
 ],
 "id": "overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.95,
   "hfov": 20.23
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9, this.camera_9E0B81EA_8C08_7CB1_41C2_BAA550840EF5); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968413D9_831A_68A1_41D3_0E4026373F71",
   "pitch": -17.39,
   "yaw": -80.91,
   "hfov": 18.91,
   "distance": 100
  }
 ],
 "id": "overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.39,
   "hfov": 18.91
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 83.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0_HS_2_0.png",
      "width": 190,
      "height": 172
     }
    ]
   },
   "pitch": -0.75
  }
 ],
 "id": "overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.75,
   "hfov": 11.28
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228, this.camera_9D500072_8C08_7B91_41D3_C00463271C33); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929C4D6D_8B26_CF2C_41C1_EE169F48B4D6",
   "pitch": -28.23,
   "yaw": 105.02,
   "hfov": 18.54,
   "distance": 100
  }
 ],
 "id": "overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.23,
   "hfov": 18.54
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B, this.camera_9D63C09B_8C08_7C90_41DB_7B48AD4C02B6); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929C2D6D_8B26_CF2C_41BE_4E659CAA4A4F",
   "pitch": -26.18,
   "yaw": -75.39,
   "hfov": 18.88,
   "distance": 100
  }
 ],
 "id": "overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18,
   "hfov": 18.88
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929CAD6D_8B26_CF2C_41B6_09FB77236877",
   "pitch": -40.5,
   "yaw": -101.32,
   "hfov": 14.52,
   "distance": 50
  }
 ],
 "id": "overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -40.5,
   "hfov": 14.52
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_9C367E20_8C08_67B0_41BC_8E06220A82D3); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968A53D9_831A_68A1_41D1_0B8F4AEB942B",
   "pitch": -26.18,
   "yaw": -171.53,
   "hfov": 18.88,
   "distance": 100
  }
 ],
 "id": "overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18,
   "hfov": 18.88
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1AD55DD_83FA_28A1_41C9_65B21AE4B52E",
   "pitch": -32.71,
   "yaw": -26.19,
   "hfov": 19.85,
   "distance": 100
  }
 ],
 "id": "overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.71,
   "hfov": 19.85
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0_HS_2_0.png",
      "width": 102,
      "height": 75
     }
    ]
   },
   "pitch": 1.57
  }
 ],
 "id": "overlay_94B756C0_84E6_7666_4193_67167020E744",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0_HS_2_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 1.57,
   "hfov": 6.04
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_9CE89F38_8C08_6591_41C0_A7775015294D); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992F90E3_88EA_7555_41C6_08D618A38F9F",
   "pitch": -49.91,
   "yaw": -49.09,
   "hfov": 15.81,
   "distance": 50
  }
 ],
 "id": "overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -49.91,
   "hfov": 15.81
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992FF0E3_88EA_7555_41C1_EF65C6B33C71",
   "pitch": -36.41,
   "yaw": -6.55,
   "hfov": 13.17,
   "distance": 100
  }
 ],
 "id": "overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED",
 "data": {
  "label": "Arrow 05a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -36.41,
   "hfov": 13.17
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_9C7D7E74_8C08_6791_41D7_552C32AFF9A1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968953D9_831A_68A1_41DB_CA6ACFE8FE4D",
   "pitch": -12.06,
   "yaw": -2.94,
   "hfov": 16.97,
   "distance": 100
  }
 ],
 "id": "overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.06,
   "hfov": 16.97
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5, this.camera_9C8C4E8C_8C08_6771_41D8_AC8C98847129); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968883D9_831A_68A1_41E0_1842AA2923C5",
   "pitch": -15.55,
   "yaw": 177.88,
   "hfov": 8.13,
   "distance": 100
  }
 ],
 "id": "overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.55,
   "hfov": 8.13
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_9CDB6F06_8C08_6570_41DB_74F3DFCFB29A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1AE55DD_83FA_28A1_41E0_0C7EFB27DBFF",
   "pitch": -28.64,
   "yaw": 140.86,
   "hfov": 16.76,
   "distance": 50
  }
 ],
 "id": "overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -28.64,
   "hfov": 16.76
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_9CC85EF1_8C08_6493_41AF_2E396B74F5C0); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1AEB5DD_83FA_28A1_41D4_FF6E93A24AC5",
   "pitch": -17.57,
   "yaw": 91.71,
   "hfov": 15.29,
   "distance": 100
  }
 ],
 "id": "overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.57,
   "hfov": 15.29
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353, this.camera_9CBE9EDC_8C08_6491_41CC_3BD7BE5C9D80); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1AEF5DD_83FA_28A1_41D4_8EB4D774778F",
   "pitch": -15.11,
   "yaw": -88.3,
   "hfov": 15.48,
   "distance": 100
  }
 ],
 "id": "overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.11,
   "hfov": 15.48
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 33.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_3_0.png",
      "width": 104,
      "height": 86
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "id": "overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.54,
   "hfov": 6.19
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148, this.camera_8296142D_8C08_7BB3_41DC_B1D708DCE77C); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992FD0E3_88EA_7555_41D7_C54779B0EB3D",
   "pitch": -21.68,
   "yaw": -2.57,
   "hfov": 19.55,
   "distance": 100
  }
 ],
 "id": "overlay_9165DE70_842A_7625_41CC_0834CAB935D3",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.68,
   "hfov": 19.55
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992E00E3_88EA_7555_41C4_038304D076CC",
   "pitch": -40.5,
   "yaw": -170.71,
   "hfov": 16,
   "distance": 100
  }
 ],
 "id": "overlay_853502E2_88DA_7554_41C2_18211543FD11",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.5,
   "hfov": 16
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_9EAC82DD_8C08_7C93_41D3_A0F4D8C69220); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A9D5E1_83FA_2861_41DE_11EAEBE54C26",
   "pitch": -16.77,
   "yaw": -113.44,
   "hfov": 20.14,
   "distance": 100
  }
 ],
 "id": "overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.77,
   "hfov": 20.14
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_1_0.png",
      "width": 246,
      "height": 207
     }
    ]
   },
   "pitch": 8.52
  }
 ],
 "id": "overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 8.52,
   "hfov": 14.42
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_990E1128_88EA_74D3_41BD_01424F88907F, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 89.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_2_0.png",
      "width": 185,
      "height": 114
     }
    ]
   },
   "pitch": 2.41
  }
 ],
 "id": "overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_2_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 2.41,
   "hfov": 10.95
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_9D408047_8C08_7BFF_41DA_72E8A1442BF2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968A83D9_831A_68A1_41D4_F5029AA15299",
   "pitch": -11.45,
   "yaw": 0.91,
   "hfov": 17.81,
   "distance": 100
  }
 ],
 "id": "overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -11.45,
   "hfov": 17.81
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_9D26FFF9_8C08_6493_41E0_145BB9D2FA06); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968A23D9_831A_68A1_41CA_42D58479B9A9",
   "pitch": -12.74,
   "yaw": 178.01,
   "hfov": 8.34,
   "distance": 100
  }
 ],
 "id": "overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.74,
   "hfov": 8.34
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_9D31E020_8C08_7BB0_41DB_66E07D5AECCC); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1ACC5DD_83FA_28A1_41CE_19C4FA815243",
   "pitch": -18.18,
   "yaw": -43.27,
   "hfov": 12.92,
   "distance": 50
  }
 ],
 "id": "overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -18.18,
   "hfov": 12.92
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_9EDF632C_8C08_7DB1_41D5_6EDA253BE015); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992EF0E3_88EA_7555_41A3_20743B2335CD",
   "pitch": -20.05,
   "yaw": 14.2,
   "hfov": 19.76,
   "distance": 100
  }
 ],
 "id": "overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.05,
   "hfov": 19.76
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_9ECF3310_8C08_7D90_41D9_9EB2AEC1798F); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992D20E3_88EA_7555_41C2_F9CA94E521CC",
   "pitch": -18.41,
   "yaw": -165.39,
   "hfov": 19.96,
   "distance": 100
  }
 ],
 "id": "overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.41,
   "hfov": 19.96
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_9D8280EC_8C08_7CB1_41AC_293F5ADC77FD); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992D00E3_88EA_7555_41BF_826318DBEC81",
   "pitch": -22.91,
   "yaw": -7.89,
   "hfov": 19.38,
   "distance": 100
  }
 ],
 "id": "overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.91,
   "hfov": 19.38
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422, this.camera_9DADB146_8C08_7DF0_41D1_E4EF081AF94D); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992D60E3_88EA_7555_41DB_463EED29E56D",
   "pitch": -14.73,
   "yaw": -104.03,
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 20.35
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_9D92B11D_8C08_7D93_41D8_E4D4B579B21B); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992D40E3_88EA_7555_41D0_16D9848C36CC",
   "pitch": -41.73,
   "yaw": -45.27,
   "hfov": 14.25,
   "distance": 50
  }
 ],
 "id": "overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -41.73,
   "hfov": 14.25
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_9C410E36_8C08_6791_41C2_E8DCE6FBCE27); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968823D9_831A_68A1_41B8_2F9B93642ED6",
   "pitch": -14.93,
   "yaw": 3.16,
   "hfov": 17.96,
   "distance": 100
  }
 ],
 "id": "overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.93,
   "hfov": 17.96
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968FB3D9_831A_68A1_416F_F7821B63344D",
   "pitch": -18.61,
   "yaw": -170.09,
   "hfov": 16.45,
   "distance": 100
  }
 ],
 "id": "overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.61,
   "hfov": 16.45
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_9901F128_88EA_74D3_4199_EC59552DC909, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 151.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0_HS_2_0.png",
      "width": 155,
      "height": 154
     }
    ]
   },
   "pitch": 4.32
  }
 ],
 "id": "overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.32,
   "hfov": 9.19
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_829A03FB_8C08_7C90_41CD_1A1B715FD51E); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabled": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9921D0D3_88EA_7574_41CC_3C847A4F87A0",
   "pitch": -6.98,
   "yaw": 74.81,
   "hfov": 14.68,
   "distance": 100
  }
 ],
 "id": "overlay_9549F9DA_843A_DA65_417F_F6BF45FD6CB9",
 "data": {
  "label": "Circle Point 02c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_0_0_0_map.gif",
      "width": 49,
      "height": 16
     }
    ]
   },
   "pitch": -6.98,
   "hfov": 14.68
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_829F2414_8C08_7B90_41C1_2CFC487C4498); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992030D3_88EA_7574_41D5_8160E814ACE8",
   "pitch": -16.68,
   "yaw": 179.23,
   "hfov": 14.26,
   "distance": 100
  }
 ],
 "id": "overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.68,
   "hfov": 14.26
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_828033E4_8C08_7CB1_41D5_44FC6ABE98C9); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992060D3_88EA_7574_41CA_ED8A550C3B38",
   "pitch": -15.89,
   "yaw": 0.19,
   "hfov": 11.87,
   "distance": 100
  }
 ],
 "id": "overlay_972C6E21_843E_5626_41D5_DD12A0A2F666",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.89,
   "hfov": 11.87
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_9E7272A0_8C08_7CB1_41D1_B620CA03B0E6); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929B6D6D_8B26_CF2C_41C7_90195BC1C258",
   "pitch": -24.55,
   "yaw": -162.94,
   "hfov": 19.14,
   "distance": 100
  }
 ],
 "id": "overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.55,
   "hfov": 19.14
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_9DDE31AB_8C08_7CB7_41DD_8B27BEA17DC3); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_960ADE38_84FA_D625_418B_9CBD3F8F11F0",
   "pitch": -6.88,
   "yaw": -92.57,
   "hfov": 9.3,
   "distance": 100
  }
 ],
 "id": "overlay_92ACFCCD_833A_F8A6_41A7_33F8602A4D4C",
 "data": {
  "label": "Arrow 05a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -6.88,
   "hfov": 9.3
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_9DE9F1BF_8C08_7C8F_41CA_A687DA14FAD6); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9689C3D9_831A_68A1_41D2_86FA5EDA0F2C",
   "pitch": -19.35,
   "yaw": -171.72,
   "hfov": 16.4,
   "distance": 100
  }
 ],
 "id": "overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.35,
   "hfov": 16.4
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 120.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_2_0.png",
      "width": 146,
      "height": 150
     }
    ]
   },
   "pitch": -1
  }
 ],
 "id": "overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1,
   "hfov": 8.66
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_82C89488_8C08_7B71_41C2_9E7EDC965E6A); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929A2D6D_8B26_CF2C_41DF_F3A57105DCAC",
   "pitch": -19.73,
   "yaw": 159.75,
   "hfov": 16.56,
   "distance": 100
  }
 ],
 "id": "overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -19.73,
   "hfov": 16.56
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929AFD6D_8B26_CF2C_41E0_25A3FFB5C653",
   "pitch": -13.3,
   "yaw": 3.89,
   "hfov": 25.88,
   "distance": 100
  }
 ],
 "id": "overlay_9B253687_88DA_5DDC_41DA_B885E27834D7",
 "data": {
  "label": "Arrow 05a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.3,
   "hfov": 25.88
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_9C50CE45_8C08_67F3_41E0_477ABAC3A253); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A71AE192_830A_E8A3_41E0_1E783651482C",
   "pitch": -13.95,
   "yaw": 175.37,
   "hfov": 11.89,
   "distance": 100
  }
 ],
 "id": "overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.95,
   "hfov": 11.89
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -85.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_1_0.png",
      "width": 97,
      "height": 75
     }
    ]
   },
   "pitch": 5.91
  }
 ],
 "id": "overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 5.91,
   "hfov": 5.74
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_9C63EE65_8C08_67B0_41E0_682D8C75A6BD); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_92811D4E_8B26_CF6C_41DC_B5C750DD7608",
   "pitch": -15.55,
   "yaw": -3.8,
   "hfov": 20.27,
   "distance": 100
  }
 ],
 "id": "overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.55,
   "hfov": 20.27
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_82A41460_8C08_7BB0_41D4_1BFEE06A6991); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A8F5E1_83FA_2861_41D9_098CA08C141F",
   "pitch": -15.3,
   "yaw": 167.12,
   "hfov": 11,
   "distance": 100
  }
 ],
 "id": "overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.3,
   "hfov": 11
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE, this.camera_82B2D474_8C08_7B91_41D7_7055E0F473DD); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A955E1_83FA_2861_41BB_EE2E7381BC99",
   "pitch": -15.1,
   "yaw": 31.57,
   "hfov": 14.38,
   "distance": 100
  }
 ],
 "id": "overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.1,
   "hfov": 14.38
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E, this.camera_9E8DD2B5_8C08_7C90_41E0_5DBB392E3FB8); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992E60E3_88EA_7555_41C3_2E835E101C5B",
   "pitch": -27.41,
   "yaw": -0.12,
   "hfov": 18.68,
   "distance": 100
  }
 ],
 "id": "overlay_9153C18D_842A_AAFF_41D3_A3689DC7F1A5",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.41,
   "hfov": 18.68
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_9E9D02C9_8C08_7CF0_41D4_A4E2659C79AB); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992E40E3_88EA_7555_41C9_E0995693F98F",
   "pitch": -63.41,
   "yaw": 138.82,
   "hfov": 11.48,
   "distance": 50
  }
 ],
 "id": "overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -63.41,
   "hfov": 11.48
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_9E402259_8C08_7F93_41DA_FCB53B7EE452); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9608AE38_84FA_D625_41D4_FA6E0ECDF930",
   "pitch": -27,
   "yaw": -81.27,
   "hfov": 17.01,
   "distance": 100
  }
 ],
 "id": "overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27,
   "hfov": 17.01
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_9E366245_8C08_7FF3_41DB_8F3CAC747404); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968B43D9_831A_68A1_41BD_4BA2D2277ED0",
   "pitch": -22.5,
   "yaw": 149.45,
   "hfov": 17.64,
   "distance": 50
  }
 ],
 "id": "overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -22.5,
   "hfov": 17.64
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_9E629282_8C08_7F71_41C7_BDF15D307EBC); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_95019D59_8316_39A1_41C9_44AF26AAEE04",
   "pitch": -13.52,
   "yaw": -178.27,
   "hfov": 16.89,
   "distance": 100
  }
 ],
 "id": "overlay_94421384_831A_28A6_41A7_963184D23B9D",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.52,
   "hfov": 16.89
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_9E53D26E_8C08_7FB0_41D7_AB01D2A6180F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9B22EED6_830B_D8A2_41DE_7155E0B44DE4",
   "pitch": -12.45,
   "yaw": 0.93,
   "hfov": 19.18,
   "distance": 100
  }
 ],
 "id": "overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.45,
   "hfov": 19.18
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_9424979F_84EE_761B_41A5_CA2074F40C71, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -33.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_4_0.png",
      "width": 59,
      "height": 51
     }
    ]
   },
   "pitch": 1.43
  }
 ],
 "id": "overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_4_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.43,
   "hfov": 3.54
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_82AE4449_8C08_7BF3_41D0_F24A26482823); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_968653D9_831A_68A1_41D8_7A34CC73361B",
   "pitch": -13.37,
   "yaw": 89.6,
   "hfov": 18.08,
   "distance": 100
  }
 ],
 "id": "overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.37,
   "hfov": 18.08
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0_HS_1_0.png",
      "width": 246,
      "height": 207
     }
    ]
   },
   "pitch": 9.92
  }
 ],
 "id": "overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 9.92,
   "hfov": 14.36
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_9E0551FE_8C08_7C91_41D0_29028E442E40); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1ABA5E1_83FA_2861_41DD_0B874E46D777",
   "pitch": -39.68,
   "yaw": 138.16,
   "hfov": 16.19,
   "distance": 100
  }
 ],
 "id": "overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.68,
   "hfov": 16.19
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_9E147212_8C08_7F91_41C4_E2A80F643DDF); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A805E1_83FA_2861_41C6_3665234084A7",
   "pitch": -21.27,
   "yaw": 1.11,
   "hfov": 19.61,
   "distance": 100
  }
 ],
 "id": "overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.27,
   "hfov": 19.61
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_9E24B231_8C08_7F93_41D1_93B0B360CF7E); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A875E1_83FA_2861_41E0_612AA7BBCDBD",
   "pitch": -14.73,
   "yaw": -83.16,
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 20.35
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_9EBC12FB_8C08_7C97_41C4_58D78FD675E1); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_929BDD6D_8B26_CF2C_41D2_8B0F2C351D32",
   "pitch": -20.05,
   "yaw": -0.53,
   "hfov": 19.76,
   "distance": 100
  }
 ],
 "id": "overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.05,
   "hfov": 19.76
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_9D7D50C3_8C08_7CF7_41D1_970CBCD59896); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A1A185DD_83FA_28A1_41CF_E25CD20905DE",
   "pitch": -26.59,
   "yaw": 88.45,
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "id": "overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
 "data": {
  "label": "Arrow 05b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.59,
   "hfov": 14.12
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 53.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0_HS_1_0.png",
      "width": 87,
      "height": 67
     }
    ]
   },
   "pitch": -1.4
  }
 ],
 "id": "overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -1.4,
   "hfov": 5.2
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_9C9C7EA0_8C08_64B1_41D0_1B2F381BD155); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_992DB0E3_88EA_7555_41D7_72F03B2A6693",
   "pitch": -11.49,
   "yaw": 7.82,
   "hfov": 14.52,
   "distance": 100
  }
 ],
 "id": "overlay_97BAB650_842A_7665_41B3_698B0812037B",
 "data": {
  "label": "Arrow 05a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -11.49,
   "hfov": 14.52
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_9CAFEEC0_8C08_64F0_41CF_78703A239B64); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 157.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0.png",
      "width": 84,
      "height": 57
     }
    ]
   },
   "pitch": -10.22
  }
 ],
 "id": "overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1",
 "data": {
  "label": "Arrow 05c Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -10.22,
   "hfov": 4.91
  }
 ],
 "rollOverDisplay": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992EB0E3_88EA_7555_41D6_31A0C9CF6E88",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992E90E3_88EA_7555_41E0_B36232C0BAC2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968443D9_831A_68A1_41DB_A70FE79B17F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1AE15DD_83FA_28A1_41CF_49EB95B75601",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992040D3_88EA_7574_41DD_4435FF8968D3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0.png",
   "width": 720,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992090E3_88EA_7555_416D_AD58A6769921",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9684E3D9_831A_68A1_41D4_3A863E1331E0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968413D9_831A_68A1_41D3_0E4026373F71",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929C4D6D_8B26_CF2C_41C1_EE169F48B4D6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929C2D6D_8B26_CF2C_41BE_4E659CAA4A4F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929CAD6D_8B26_CF2C_41B6_09FB77236877",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968A53D9_831A_68A1_41D1_0B8F4AEB942B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1AD55DD_83FA_28A1_41C9_65B21AE4B52E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992F90E3_88EA_7555_41C6_08D618A38F9F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992FF0E3_88EA_7555_41C1_EF65C6B33C71",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968953D9_831A_68A1_41DB_CA6ACFE8FE4D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968883D9_831A_68A1_41E0_1842AA2923C5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1AE55DD_83FA_28A1_41E0_0C7EFB27DBFF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1AEB5DD_83FA_28A1_41D4_FF6E93A24AC5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1AEF5DD_83FA_28A1_41D4_8EB4D774778F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992FD0E3_88EA_7555_41D7_C54779B0EB3D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96B075E0_843A_AA25_4186_26A10BAD1D6E_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992E00E3_88EA_7555_41C4_038304D076CC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A9D5E1_83FA_2861_41DE_11EAEBE54C26",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968A83D9_831A_68A1_41D4_F5029AA15299",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968A23D9_831A_68A1_41CA_42D58479B9A9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0_HS_2_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1ACC5DD_83FA_28A1_41CE_19C4FA815243",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992EF0E3_88EA_7555_41A3_20743B2335CD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992D20E3_88EA_7555_41C2_F9CA94E521CC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992D00E3_88EA_7555_41BF_826318DBEC81",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992D60E3_88EA_7555_41DB_463EED29E56D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992D40E3_88EA_7555_41D0_16D9848C36CC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968823D9_831A_68A1_41B8_2F9B93642ED6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968FB3D9_831A_68A1_416F_F7821B63344D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_0_0.png",
   "width": 800,
   "height": 390
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9921D0D3_88EA_7574_41CC_3C847A4F87A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992030D3_88EA_7574_41D5_8160E814ACE8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992060D3_88EA_7574_41CA_ED8A550C3B38",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929B6D6D_8B26_CF2C_41C7_90195BC1C258",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_960ADE38_84FA_D625_418B_9CBD3F8F11F0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9689C3D9_831A_68A1_41D2_86FA5EDA0F2C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0.png",
   "width": 800,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929A2D6D_8B26_CF2C_41DF_F3A57105DCAC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929AFD6D_8B26_CF2C_41E0_25A3FFB5C653",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A71AE192_830A_E8A3_41E0_1E783651482C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92811D4E_8B26_CF6C_41DC_B5C750DD7608",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A8F5E1_83FA_2861_41D9_098CA08C141F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A955E1_83FA_2861_41BB_EE2E7381BC99",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992E60E3_88EA_7555_41C3_2E835E101C5B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992E40E3_88EA_7555_41C9_E0995693F98F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9608AE38_84FA_D625_41D4_FA6E0ECDF930",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968B43D9_831A_68A1_41BD_4BA2D2277ED0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_95019D59_8316_39A1_41C9_44AF26AAEE04",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9B22EED6_830B_D8A2_41DE_7155E0B44DE4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_968653D9_831A_68A1_41D8_7A34CC73361B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1ABA5E1_83FA_2861_41DD_0B874E46D777",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A805E1_83FA_2861_41C6_3665234084A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A875E1_83FA_2861_41E0_612AA7BBCDBD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_929BDD6D_8B26_CF2C_41D2_8B0F2C351D32",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A1A185DD_83FA_28A1_41CF_E25CD20905DE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_992DB0E3_88EA_7555_41D7_72F03B2A6693",
 "frameDuration": 41
}],
 "paddingRight": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "shadow": false,
 "data": {
  "name": "Player1011"
 },
 "paddingTop": 0,
 "minHeight": 20,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
