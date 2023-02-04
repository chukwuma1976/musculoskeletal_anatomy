puts "🌱 Seeding messages..."

Bodypart.destroy_all
Region.destroy_all
Muscle.destroy_all
Bone.destroy_all

bodyparts = [
    {name: "Shoulder and Rotator Cuff"},
    {name: "Chest"},
    {name: "Back"},
    {name: "Arms"},
    {name: "Abdominals"},
    {name: "Glutes"},
    {name: "Quadriceps"},
    {name: "Hamstrings"},
    {name: "Calves"}
    {name: "Miscellaneous"}
]

bodyparts.each do |bodypart|
    Bodypart.create(name: bodypart[:name])
end

puts 'bodyparts uploaded'

regions = [
    {name: "Skull"},
    {name: "Spine"},
    {name: "Thorax"},
    {name: "Pelvis"},
    {name: "Upper Extremity"},
    {name: "Lower Extremity"}
]

regions.each do |region|
    Region.create(name: region[:name])
end

puts 'regions uploaded'

shoulder_id = Bodypart.find_by(name: "Shoulder").id
chest_id = Bodypart.find_by(name: "Chest").id
back_id = Bodypart.find_by(name: "Back").id
arms_id = Bodypart.find_by(name: "Arms").id
abdominals_id =Bodypart.find_by(name: "Abdominals").id
glutes_id = Bodypart.find_by(name: "Glutes").id
quadriceps_id = Bodypart.find_by(name: "Quadriceps").id
hamstrings_id = Bodypart.find_by(name: "Hamstrings").id
calves_id = Bodypart.find_by(name: "Calves").id
miscellaneous_id = Bodypart.find_by(name: "Miscellaneous").id

shoulder_muscles = [
    {
        name: "deltoid",
        origin: "lateral one-third of the clavicle, acromion, the lower lip of the crest of the spine of the scapula",
        insertion: "deltoid tuberosity of the humerus",
        action: "abducts arm; anterior fibers flex & medially rotate the arm; posterior fibers extend & laterally rotate the arm",
        innervation: "axillary nerve (C5,6)",
        blood_supply: "posterior circumflex humeral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/deltoid-muscle.jpg"
    },
    {
        name: "subscapularis",
        origin: "subscapular fossa",
        insertion: "lesser tubercle of the humerus",
        action: "medially rotates the arm; assists extention of the arm",
        innervation: "upper and lower subscapular nerves (C5,6)",
        blood_supply: "subscapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/subscapular.jpg"
    },
    {
        name: "supraspinatus",
        origin: "supraspinous fossa",
        insertion: "greater tubercle of the humerus",
        action: "abducts the arm (initiates abduction)",
        innervation: "suprascapular nerve (C5,6) ",
        blood_supply: "suprascapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/supraspinatus-muscle.jpg"
    },
    {
        name: "teres minor",
        origin: "upper 2/3 of the lateral border of the scapula",
        insertion: "greater tubercle of the humerus",
        action: "laterally rotates the arm",
        innervation: "axillary nerve (C5,6)",
        blood_supply: "circumflex scapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/teres-minor.jpg"
    },    {
        name: "infraspinatus",
        origin: "infraspinous fossa",
        insertion: "greater tubercle of the humerus",
        action: "laterally rotates the arm",
        innervation: "suprascapular nerve",
        blood_supply: "suprascapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/infraspinatus-muscle.jpg"
    }
]

shoulder_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: shoulder_id
    )
end

chest_muscles = [
    {
        name: "pectoralis major",
        origin: "medial 1/2 of the clavicle, manubrium & body of sternum, costal cartilages of ribs 2-6",
        insertion: "greater tubercle of the humerus",
        action: "flexes and adducts the arm, medially rotates the arm",
        innervation: "medial and lateral pectoral nerves (C5-T1)",
        blood_supply: "pectoral branch of the thoracoacromial trunk"
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/pectoralis-major.jpg"
    },    
    {
        name: "pectoralis minor",
        origin: "ribs 3-5",
        insertion: "coracoid process of the scapula",
        action: "draws the scapula forward, medialward, and downward",
        innervation: "medial pectoral nerve (C8, T1)",
        blood_supply: "pectoral branch of the thoracoacromial trunk"
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/pectoralis-minor.jpg"
    },    {
        name: "coracobrachialis",
        origin: "coracoid process of the scapula",
        insertion: "medial side of the humerus at mid-shaft",
        action: "flexes and adducts the arm",
        innervation: "musculocutaneous nerve (C5,6)",
        blood_supply: "brachial a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/coracobrachialis.jpg"
    }
]

chest_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: chest_id
    )
end

back_muscles = [
    {
        name: "erector spinae",
        origin: "iliac crest, sacrum, transverse and spinous processes of vertebrae and supraspinal ligament",
        insertion: "angles of the ribs, transverse and spinous processes of vertebrae, posterior aspect of the skull",
        action: "extends and laterally bends the trunk, neck and head",
        innervation: "segmentally innervated by dorsal primary rami of spinal nerves C1-S5",
        blood_supply: "supplied segmentally by: deep cervical a., posterior intercostal aa., subcostal aa., lumbar aa."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/erector-spinae.jpg"
    },    
    {
        name: "latissimus dorsi	",
        origin: "vertebral spines from T7 to the sacrum, posterior third of the iliac crest, lower 3 or 4 ribs, sometimes from the inferior angle of the scapula",
        insertion: "floor of the intertubercular groove of humerus",
        action: "extends the arm and rotates the arm medially",
        innervation: "thoracodorsal nerve (C7,8)",
        blood_supply: "thoracodorsal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/latissimus-dorsi.jpg"
    },
    {
        name: "rhomboid major",
        origin: "spines of vertebrae T2-T5",
        insertion: "medial border of the scapula inferior to the spine of the scapula",
        action: "retracts, elevates and rotates the scapula inferiorly",
        innervation: "dorsal scapular nerve (C5)",
        blood_supply: "dorsal scapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/greater-rhomboid.jpg"
    },    
    {
        name: "rhomboid minor",
        origin: "spines of vertebrae C7 and T1",
        insertion: "medial border of the scapula at the root of the spine of the scapula",
        action: "retracts, elevates and rotates the scapula inferiorly",
        innervation: "dorsal scapular nerve (C5)",
        blood_supply: "dorsal scapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/lesser-rhomboid.jpg"
    },
    {
        name: "serratus anterior",
        origin: "ribs 1-8 or 9",
        insertion: "medial border of the scapula on its costal (deep) surface",
        action: "it draws the scapula forward; the inferior fibers rotate the scapula superiorly",
        innervation: "long thoracic nerve ",
        blood_supply: "lateral thoracic a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/serratus-anterior.jpg"
    },    
    {
        name: "trapezius",
        origin: "medial third of the superior nuchal line, external occipital protuberance, ligamentum nuchae, spinous processes of vertebrae C7-T12",
        insertion: "lateral third of the clavicle, medial side of the acromion and the upper crest of the scapular spine, tubercle of the scapular spine",
        action: "elevates and depresses the scapula; rotates the scapula superiorly; retracts scapula",
        innervation: "spinal accessory (XI)",
        blood_supply: "transverse cervical a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/trapezius.jpg"
    },
    {
        name: "teres major",
        origin: "dorsal surface of the inferior angle of the scapula",
        insertion: "crest of the lesser tubercle of the humerus",
        action: "adducts the arm, medially rotates the arm, assists in arm extension",
        innervation: "lower subscapular nerve (C5,6)",
        blood_supply: "circumflex scapular a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/teres-major.jpg"
    }
]

back_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: back_id
    )
end

arms_muscles = [ 
    {
        name: "biceps brachii",
        origin: "short head: tip of the coracoid process of the scapula; long head: supraglenoid tubercle of the scapula",
        insertion: "tuberosity of the radius",
        action: "flexes the forearm, flexes arm (long head), supinates",
        innervation: "musculocutaneous nerve (C5,6)",
        blood_supply: "brachial a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/biceps-brachii.jpg"
    },   
    {
        name: "brachialis",
        origin: "anterior surface of the lower one-half of the humerus",
        insertion: "coronoid process of the ulna",
        action: "flexes the forearm",
        innervation: "musculocutaneous nerve (C5,6)",
        blood_supply: "brachial a., radial recurrent a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/brachialis.jpg"
    },   
    {
        name: "brachioradialis",
        origin: "upper two-thirds of the lateral supracondylar ridge of the humerus",
        insertion: "lateral side of the base of the styloid process of the radius",
        action: "flexes the elbow, assists in pronation & supination",
        innervation: "radial nerve",
        blood_supply: "radial recurrent a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/brachioradialis.jpg"
    },   
    {
        name: "triceps brachii",
        origin: "long head: infraglenoid tubercle of the scapula; lateral head: posterolateral humerus & lateral intermuscular septum; medial head: posteromedial surface of the inferior 1/2 of the humerus",
        insertion: "olecranon process of the ulna",
        action: "extends the forearm; the long head extends and adducts arm",
        innervation: "radial nerve",
        blood_supply: "deep brachial (profunda brachii) a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/triceps-brachii.jpg"
    }
]

arms_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: arms_id
    )
end

abdominals_muscles = [
    {
        name: "external oblique",
        origin: "lower 8 ribs",
        insertion: "linea alba, pubic crest & tubercle, anterior superior iliac spine & anterior half of iliac crest",
        action: "flexes and laterally bends the trunk",
        innervation: "intercostal nerves 7-11, subcostal, iliohypogastric and ilioinguinal nerves",
        blood_supply: "musculophrenic a., superior epigastric a., intercostal aa. 7-11, subcostal a., lumbar aa., superficial circumflex iliac a., deep circumflex iliac a., superficial epigastric a., inferior epigastric a., superficial external pudendal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles-thumbnails/external-oblique.jpg"
    },   
    {
        name: "internal oblique",
        origin: "thoracolumbar fascia, anterior 2/3 of the iliac crest, lateral 2/3 of the inguinal ligament",
        insertion: "lower 3 or 4 ribs, linea alba, pubic crest",
        action: "flexes and laterally bends the trunk",
        innervation: "intercostal nerves 7-11, subcostal, iliohypogastric and ilioinguinal nerves",
        blood_supply: "musculophrenic a., superior epigastric a., intercostal aa. 7-11, subcostal a., lumbar aa., superficial circumflex iliac a., deep circumflex iliac a., superficial epigastric a., inferior epigastric a., superficial external pudendal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles-thumbnails/internal-oblique.jpg"
    },   
    {
        name: "rectus abdominis",
        origin: "pubis and the pubic symphysis",
        insertion: "xiphoid process of the sternum and costal cartilages 5-7",
        action: "flexes the trunk",
        innervation: "intercostal nerves 7-11 and subcostal nerve",
        blood_supply: "superior epigastric a. intercostal aa., subcostal a., inferior epigastric a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles-thumbnails/rectus-abdominus.jpg"
    },   
    {
        name: "transversus abdominis",
        origin: "lower 6 ribs, thoracolumbar fascia, anterior 3/4 of the iliac crest, lateral 1/3 of inguinal ligament",
        insertion: "linea alba, pubic crest and pecten of the pubis",
        action: "flexes and laterally bends trunk",
        innervation: "intercostal nerves 7-11, subcostal, iliohypogastric and ilioinguinal nerves",
        blood_supply: "musculophrenic a., superior epigastric a., intercostal aa. 7-11, subcostal a., lumbar aa., superficial circumflex iliac a., deep circumflex iliac a., superficial epigastric a., inferior epigastric a., superficial external pudendal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles-thumbnails/transversus-abdominus.jpg"
    }
]

abdomimals_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: abdominals_id
    )
end

glutes_muscles = [
    {
        name: "gluteus maximus",
        origin: "posterior gluteal line, posterior surface of sacrum and coccyx, sacrotuberous ligament",
        insertion: "upper fibers: iliotibial tract; lowermost fibers: gluteal tuberosity of the femur",
        action: "extends the thigh; laterally rotates the femur",
        innervation: "inferior gluteal nerve",
        blood_supply: "superior and inferior gluteal aa."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/gluteus-maximus.jpg"
    },
    {
        name: "gluteus medius",
        origin: "external surface of the ilium between the posterior and anterior gluteal lines",
        insertion: "greater trochanter of the femur",
        action: "abducts the femur; medially rotates the thigh",
        innervation: "superior gluteal nerve",
        blood_supply: "superior gluteal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/gluteus-medius.jpg"
    },
    {
        name: "gluteus minimus",
        origin: "external surface of the ilium between the anterior and inferior gluteal lines",
        insertion: "greater trochanter of the femur",
        action: "abducts the femur; medially rotates the thigh",
        innervation: "superior gluteal nerve",
        blood_supply: "superior gluteal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/gluteus-minimus.jpg"
    }
]

glutes_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: glutes_id
    )
end

quadriceps_muscles = [
    {
        name: "rectus femoris",
        origin: "straight head: anterior inferior iliac spine; reflected head: above the superior rim of the acetabulum",
        insertion: "patella and tibial tuberosity (via the patellar ligament)",
        action: "extends knee, flexes the thigh",
        innervation: "femoral nerve",
        blood_supply: "lateral circumflex femoral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/rectus-femoris.jpg"
    },
    {
        name: "vastus intermedius",
        origin: "anterior and lateral surface of the femur",
        insertion: "patella",
        action: "extends knee",
        innervation: "femoral nerve",
        blood_supply: "lateral femoral circumflex a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/vastus-intermedius.jpg"
    },
    {
        name: "vastus lateralis",
        origin: "lateral intermuscular septum, lateral lip of the linea aspera and the gluteal tuberosity",
        insertion: "patella",
        action: "extends knee",
        innervation: "femoral nerve",
        blood_supply: "lateral femoral circumflex a., perforating branches of the deep femoral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/vastus-lateralis.jpg"
    },
    {
        name: "vastus medialis",
        origin: "medial intermuscular septum, medial lip of the linea aspera",
        insertion: "patella",
        action: "extends knee",
        innervation: "femoral nerve",
        blood_supply: "lateral femoral circumflex a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/vastus-medialis.jpg"
    }
]

quadriceps_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: quadriceps_id
    )
end

hamstrings_muscles = [
    {
        name: "biceps femoris",
        origin: "long head: ischial tuberosity; short head: lateral lip of the linea aspera",
        insertion: "head of fibula and lateral condyle of the tibia",
        action: "extends the thigh, flexes the leg",
        innervation: "long head: tibial nerve; short head: common fibular (peroneal) nerve",
        blood_supply: "perforating branches of the deep femoral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/biceps-femoris.jpg"
    },
    {
        name: "semimembranosus",
        origin: "ischial tuberosity",
        insertion: "medial condyle of the tibia",
        action: "extends the thigh, flexes the leg",
        innervation: "tibial nerve",
        blood_supply: "perforating branches of the deep femoral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/semimembrenosis.jpg"
    },
    {
        name: "semitendinosus",
        origin: "ischial tuberosity",
        insertion: "medial surface of tibia",
        action: "extends the thigh, flexes the leg",
        innervation: "tibial nerve",
        blood_supply: "perforating branches of the deep femoral a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/semitendinosis.jpg"
    }
]

hamstrings_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: hamstrings_id
    )
end

calves_muscles = [
    {
        name: "gastrocnemius",
        origin: "femur; medial head: above the medial femoral condyle; lateral head: above the lateral femoral condyle",
        insertion: "dorsum of the calcaneus via the calcaneal (Achilles') tendon",
        action: "plantarflexes foot; weak knee flexor",
        innervation: "tibial nerve",
        blood_supply: "sural aa. (from the popliteal a.), posterior tibial a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/gastrocnemius.jpg"
    },
    {
        name: "soleus",
        origin: "posterior surface of head and upper shaft of the fibula, soleal line of the tibia",
        insertion: "dorsum of the calcaneus via the calcaneal (Achilles') tendon",
        action: "plantarflexes foot",
        innervation: "tibial nerve",
        blood_supply: "posterior tibial a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/soleus.jpg"
    },
    {
        name: "",
        origin: "",
        insertion: "",
        action: "",
        innervation: "",
        blood_supply: ""
        url: ""
    }
]

calves_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: calves_id
    )
end

miscellaneous_muscles = [
    {
        name: "adductor magnus",
        origin: "ischiopubic ramus and ischial tuberosity",
        insertion: "linea aspera of the femur; the ischiocondylar part inserts on the adductor tubercle of the femur",
        action: "adducts thigh",
        innervation: "posterior division of the obturator nerve; tibial nerve",
        blood_supply: "obturator a., deep femoral a., medial femoral circumflex a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/adductor-magnus.jpg"
    },
    {
        name: "iliopsoas",
        origin: "iliac fossa; bodies and transverse processes of lumbar vertebrae",
        insertion: "lesser trochanter of the femur",
        action: "flexes the thigh",
        innervation: "branches of the ventral primary rami of spinal nerves L2-L4; branches of the femoral nerve",
        blood_supply: "iliolumbar a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/iliopsoas.jpg"
    },
    {
        name: "tensor fasciae latae",
        origin: "anterior part of the iliac crest, anterior superior iliac spine",
        insertion: "anterior part of the iliac crest, anterior superior iliac spine",
        action: "flexes, abducts, and medially rotates the thigh",
        innervation: "superior gluteal nerve",
        blood_supply: "superior gluteal a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/tensor-fasciae-lata.jpg"
    },
    {
        name: "tibialis anterior",
        origin: "lateral tibial condyle and the upper lateral surface of the tibia",
        insertion: "medial surface of the medial cuneiform and the 1st metatarsal",
        action: "dorsiflexes and inverts the foot",
        innervation: "deep fibular (peroneal) nerve",
        blood_supply: "anterior tibial a."
        url: "https://anatomy.elpaso.ttuhsc.edu/images/muscles/tibialis-anterior.jpg"
    }
]

miscellaneous_muscles.each do |muscle|
    Muscle.create(
        name: muscle[:name], 
        origin: muscle[:origin], 
        insertion: muscle[:insertion], 
        action: muscle[:action], 
        innervation: muscle[:innervation], 
        blood_supply: muscle[:blood_supply], 
        url: muscle[:url],
        bodypart_id: miscellaneous_id
    )
end

puts "Muscles successfully created"

# regions.each do |region|
#     Region.create(name: region[:name])
# end

skull_id = Region.find_by(name: "Skull").id
spine_id = Region.find_by(name: "Spine").id
thorax_id = Region.find_by(name: "Thorax").id
pelvis_id = Region.find_by(name: "Pelvis").id
upper_extremity_id = Region.find_by(name: "Upper extremity").id
lower_extremity_id = Region.find_by(name: "Lower extemity").id

skull_bones = [
    {
        name: "",
        description: "",
        url: ""
    }
]

skull_bones.each do |bone|
    Bone.create(
        name: bone[:name],
        description: bone[:description],
        url: bone[:url],
        region_id: skull_id
    )
end

puts "✅ Done seeding!"