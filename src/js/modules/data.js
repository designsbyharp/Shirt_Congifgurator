import { MeshStandardMaterial, DoubleSide } from "three";
import { loadTexture } from "./loadTexture"

MeshStandardMaterial

let data = {
  "materialData": {
    "buttonInfo": ".fabric-changer"
  },
  "texturesData" : [
    {
      "id": "floral-1",
      "url": "/Textures/floral-1.jpg",
      "scaleX": 0.2,
      "scaleY": 0.2
    },
    {
      "id": "floral-2",
      "url": "/Textures/floral-2.jpg",
      "scaleX": 0.2,
      "scaleY": 0.2
    } ,
    {
      "id": "floral-3",
      "url": "/Textures/floral-3.jpg",
      "scaleX": 0.2,
      "scaleY": 0.2
    }   
  ],
//   "materials" : {
//     "fabric": new MeshStandardMaterial({ map: loadTexture(texturesData[0].url), side: DoubleSide }),
//     "threadMat" :new MeshStandardMaterial({
//       color:0xffff00,         
//       // combine: THREE.MixOperation,
//       // side: THREE.DoubleSide
//   })
// },
  "modelData" : [
    {
      "id": 1,
      "url": "/default-shirt.gltf",
      "scaleX": 2,
      "scaleY": 2
    }
  ],
  "categories" : [
    {
      "name" : "collar",
      "category": "Collar",
      "elements" : {
        "BusinessClassic" :  {
        "url" : "/Collar/collar_BusinessClassic.gltf"
      },
        "ButtonDownModern" : {
         "url":"/Collar/collar_ButtonDownModern.gltf"
     },
        "Club" : {
         "url": "/Collar/collar_Club.gltf"
     },
       "CutAwayCasual" : {
       "url": "/Collar/collar_CutAwayCasual.gltf" 
     },
       "CutAwayClassic" : {
       "url": "/Collar/collar_CutAwayClassic.gltf"
     },
       "CutAwayExtreme" : {
       "url": "/Collar/collar_CutAwayExtreme.gltf"
     },
       "CutAwayModern" : {
       "url":  "/Collar/collar_CutAwayModern.gltf"
     },
       "CutAwaySuperior" : {
       "url": "/Collar/collar_CutAwaySuperior.gltf"
     },
       "CutAwayTwoBtn" : {
         "url": "/Collar/collar_CutAwayTwoBtn.gltf"
     },
       "Mao" : {
         "url": "/Collar/collar_Mao.gltf"
     },
       "ModernClub" : {
         "url": "/Collar/collar_ModernClub.gltf"
     },
       "Pin" : {
         "url": "/Collar/collar_Pin.gltf"
     },
       "Tab" : {
         "url": "/Collar/collar_Tab.gltf"
     },
       "TurnDownSperior" : {
         "url": "/Collar/collar_TurnDownSperior.gltf"
     },
       "Wing" : {
         "url": "/Collar/Collar_Wing.gltf"
     }
      }    
    },
    {
      "name" : "cuff",
      "elements" : {
        "DoubleButtonBeleved" : {
          "url" : "/Cuff/DoubleButtonBeleved.gltf"
        }, 
        "DoubleButtonRounded" : {
          "url" : "/Cuff/DoubleButtonRounded.gltf"
        },
        "Narrow" : {
          "url" : "/Cuff/Narrow.gltf"
        }, 
        "SingleButtonBeveled" : {
         "url" : "/Cuff/SingleButtonBeveled.gltf"
       }, 
       "SingleButtonCasual" : {
        "url" : "/Cuff/SingleButtonCasual.gltf"
      },
      "SingleButtonRounded" : {
        "url" : "/Cuff/SingleButtonRounded.gltf"
      }, 
      "SingleButtonStraight" : {
        "url" : "/Cuff/SingleButtonStraight.gltf"
      }
      }
    },
    {
      "name" : "sleeve",
      "elements" : {
        "SleeveShort" : {
          "url" : "/Sleeve/SleeveShort.gltf"
        },
        "SleeveLong" : {
          "url" : "/Sleeve/SleeveLong.gltf"
        }
      }
    },
    {
      "name" : "fit",
      "elements" : {
        "BodyFitClassic" : {
          "url" : "/Fit/BodyFitClassic.gltf"
        },
        "BodyFitModern" : {
          "url" : "/Fit/BodyFitModern.gltf"
        },
        "BodyFitStraight" : {
          "url" : "/Fit/BodyFitStraight.gltf"
        },
        "LooseFitClassic" : {
          "url" : "/Fit/LooseFitClassic.gltf"
        },
        "LooseFitModern" : {
          "url" : "/Fit/LooseFitModern.gltf"
        },
        "LooseFitStraight" : {
          "url" : "/Fit/LooseFitStraight.gltf"
        },
        "NormalFitClassic" : {
          "url" : "/Fit/NormalFitClassic.gltf"
        },
        "NormalFitModern" : {
          "url" : "/Fit/NormalFitModern.gltf"
        },
        "NormalFitStraight" : {
          "url" : "/Fit/NormalFitStraight.gltf"
        },
        "SlimFitModern" : {
          "url" : "/Fit/SlimFitModern.gltf"
        },
        "SlimFitStraight" : {
          "url" : "/Fit/SlimFitStraight.gltf"
        }
      }
    },
    {
      "name" : "placket",
      "elements" : {
        "PlacketNarrow" : {
          "url" : "/Placket/PlacketNarrow.gltf"
        },
        "PlacketWithPlacket" : {
          "url" : "/Placket/PlacketWithPlacket.gltf"
        },
        "PlacketWithoutPlacket" : {
          "url" : "/Placket/PlacketWithoutPlacket.gltf"
        }
      }
    },
    {
      "name" : "pocket",
      "elements" : {
        "VShaped" : {
          "url" : "/Pocket/VShaped.gltf"
        },
        "UShaped" : {
          "url" : "/Pocket/UShaped.gltf"
        },
        "Straight" : {
          "url" : "/Pocket/Straight.gltf"
        },
        "Lt-VShaped" : {
          "url" : "/Pocket/Lt-VShaped.gltf"
        },
        "Lt-UShaped" : {
          "url" : "/Pocket/Lt-UShaped.gltf"
        },
        "Lt-Straight" : {
          "url" : "/Pocket/Lt-Straight.gltf"
        }
      }
    }
  ]
};

const materials = {
  fabric: new MeshStandardMaterial({ map: loadTexture(data.texturesData[0].url), side: DoubleSide }),
  threadMat :new MeshStandardMaterial({
    color:0xffff00,         
    // combine: THREE.MixOperation,
    // side: THREE.DoubleSide
})
}

export {data, materials};

