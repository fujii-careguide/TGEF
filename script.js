// ===== DATA =====
const TOPICS = [
  {
    id: 1,
    titleJP: "環境整備",
    image: "images/image6.jpg",
    th: {
      meaning: "การจัดเตรียมและดูแลสภาพแวดล้อม",
      summary: "การจัดเตรียมสภาพแวดล้อม เป็นกิจวัตรประจำวันที่สำคัญ เพื่อรักษาความสะอาด ความปลอดภัย และสร้างความสบายใจให้แก่ผู้ป่วย โดยเฉพาะการทำความสะอาดเตียง ชั้นเก็บของ และโต๊ะ",
      importance: "เพื่อรักษาความสะอาดของบริเวณเตียงและพื้นที่โดยรอบผู้ป่วย\nเพื่อลดการสะสมและการแพร่กระจายของเชื้อโรคจากพื้นผิวที่มีการสัมผัสบ่อย\nเพื่อจัดสภาพแวดล้อมให้เป็นระเบียบและปลอดภัย",
      procedure: "1. การเตรียมตัวก่อนทำความสะอาด\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อน (エプロン) และสวมถุงมือก่อนเริ่มปฏิบัติงานทุกครั้ง\n- เตรียมผ้าที่ชุบแอลกอฮอล์สำหรับใช้เช็ดทำความสะอาด\n- ตรวจสอบบริเวณที่ต้องทำความสะอาด\n2. การเช็ดทำความสะอาด\n- เช็ดบริเวณที่สัมผัสบ่อย โดยเริ่มจากการเช็ดโต๊ะ แล้วไปเช็ดราวกั้นเตียง ต่อด้วยชั้นเก็บของ เช็ดอย่างทั่วถึงทุกจุด\n- หลีกเลี่ยงการนำผ้าที่ใช้แล้วไปสัมผัสกับบริเวณที่สะอาด\n- หากต้องเคลื่อนย้ายสิ่งของของผู้ป่วย ให้จัดวางกลับที่เดิมอย่างเรียบร้อยและปลอดภัยหลังเช็ดเสร็จ"
    },
    en: {
      meaning: "Maintaining and preparing the care environment.",
      summary: "Environmental maintenance is an important part of daily care. It helps maintain cleanliness and safety while creating a comfortable environment for patients, particularly by cleaning beds, storage shelves, and tables.",
      importance: "Maintains cleanliness around the patient's bed and surrounding area.\nReduces the accumulation and spread of germs from frequently touched surfaces.\nKeeps the environment organized and safe.",
      procedure: "1. Preparation Before Cleaning\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare a cloth moistened with alcohol for cleaning.\n- Check the areas that need to be cleaned.\n2. Cleaning and Wiping\n- Wipe frequently touched surfaces thoroughly. Start with the table, then clean the bed rails, followed by the storage shelves.\n- Avoid using a used section of the cloth on surfaces that have already been cleaned.\n- If you need to move the patient's belongings, return them neatly and safely to their original places after cleaning."
    },
    jp: {
      meaning: "療養環境の整備と管理",
      summary: "環境整備は、患者さんの清潔と安全を保ち、快適に過ごせる環境を整えるための大切な日常業務です。特に、ベッド周辺、収納棚、テーブルなどを清掃します。",
      importance: "患者さんのベッド周辺や身の回りを清潔に保ちます。\nよく触れる場所に付着した汚れや細菌の蓄積・拡散を防ぎます。\n環境を整理整頓し、安全を確保します。",
      procedure: "1. 清掃前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 清掃に使用するアルコールを含ませた布を準備します。\n- 清掃が必要な場所を確認します。\n2. 清掃・拭き取り\n- よく触れる場所を丁寧に拭きます。テーブルから始め、次にベッド柵、その後に収納棚を拭きます。\n- 使用済みの布の面を、清掃済みの場所に触れさせないようにします。\n- 患者さんの私物を移動させた場合は、清掃後、元の場所に整然と安全に戻します。"
    }
  },
  {
    id: 2,
    titleJP: "経管栄養準備",
    image: "images/image8.jpg",
    th: {
      meaning: "การเตรียมอาหารทางสายยาง",
      summary: "การเตรียมอาหารทางสายยาง เป็นขั้นตอนที่ต้องใช้ความระมัดระวังและความแม่นยำสูง เพื่อให้ผู้ป่วยได้รับสารอาหารที่ถูกต้อง ครบถ้วน ตามแผนการรักษาและตรงเวลา",
      importance: "ป้องกันการสลับอาหารระหว่างผู้ป่วย\nช่วยให้ผู้ป่วยได้รับอาหารในปริมาณที่กำหนด\nลดความเสี่ยงจากการเตรียมอุปกรณ์ผิดพลาดหรือการปนเปื้อน",
      procedure: "1. การเตรียมตัวก่อนปฏิบัติงาน\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงานทุกครั้ง\n- เตรียมรถเข็นที่ห้อยขวดอาหารทางสายยางไว้ เตรียมกล่องนม(อาหาร) และถ้วยตวงให้พร้อม\n- ตรวจสอบว่าขวดอาหารและสายยางมีป้ายชื่อผู้ป่วยติดอยู่ครบถ้วน\n2. การตรวจสอบชื่อและปริมาณอาหาร\n- ตรวจสอบชื่อผู้ป่วยและปริมาณอาหารที่ระบุบนสติกเกอร์ของกล่องนม(อาหาร)\n- ตรวจสอบชื่อบนกล่องนม(อาหาร) ให้ตรงกับชื่อบนขวดอาหารทางสายยางของผู้ป่วยแต่ละคน\n- กล่องอาหารมี 2 ขนาด ได้แก่ 200 มิลลิลิตรและ 125 มิลลิลิตร ต้องเลือกและตวงอาหารตามปริมาณที่ระบุไว้สำหรับผู้ป่วยแต่ละคน\n- หากต้องเตรียมอาหาร 300 มิลลิลิตร และได้รับกล่องขนาด 200 มิลลิลิตรจำนวน 2 กล่อง ซึ่งมีอาหารรวม 400 มิลลิลิตร ให้เทลงในถ้วยตวงและตวงให้ได้ 300 มิลลิลิตร ก่อนเทลงในขวดอาหาร\n- ตรวจสอบชื่อและปริมาณอีกครั้งก่อนเทอาหารลงในขวดทุกครั้ง\n3. การเตรียมขวดและสายยาง\n- เทอาหารที่ตวงได้ลงในขวดอาหารทางสายยางของผู้ป่วยให้ถูกต้อง\n- เลื่อนเปิดสายยาง เพื่อให้อาหารไหลเข้าไปจนเต็มสายและเตรียมพร้อมสำหรับการใช้งาน\n4. การจัดเตรียมและนำส่ง\n- เมื่อเตรียมอาหารครบทุกขวดแล้ว ให้ตรวจสอบชื่อผู้ป่วยและความเรียบร้อยอีกครั้ง\n- เข็นรถไปวางไว้หน้าห้องผู้ป่วยตามตำแหน่งที่กำหนด เพื่อให้พยาบาลนำไปใช้งานต่อได้สะดวก"
    },
    en: {
      meaning: "Preparation of tube feeding.",
      summary: "Preparing tube feeding requires great care and accuracy to ensure that each patient receives the correct amount of nutrition according to their prescribed treatment plan and schedule.",
      importance: "Prevents feeding mix-ups between patients.\nEnsures that patients receive the prescribed amount of nutrition.\nReduces the risk of preparation errors and contamination.",
      procedure: "1. Preparation Before Starting\n-Wash your hands thoroughly, put on an apron, and wear gloves before beginning the procedure.\n-Prepare the trolley with the tube-feeding bottles hanging on it, the formula cartons, and the measuring cup.\n-Check that each feeding bottle and tube is clearly labeled with the patient's name.\n2. Checking Patient Names and Feeding Amounts\n-Check the patient's name and the required feeding amount indicated on the formula carton label.\n-Make sure the name on each formula carton matches the name on the corresponding patient's feeding bottle.\n-Formula cartons are available in two sizes: 200 mL and 125 mL. Select and measure the formula according to the prescribed amount for each patient.\n-If 300 mL is required but two 200 mL cartons are provided, giving a total of 400 mL, pour the formula into a measuring cup and measure exactly 300 mL before transferring it into the feeding bottle.\n-Recheck the patient's name and the feeding amount before pouring the formula into the bottle.\n3. Preparing the Feeding Bottle and Tube\n-Pour the measured formula into the correct patient's feeding bottle.\n-Open the tube clamp to allow the formula to flow through the tube until the tube is filled and ready for use.\n4. Final Check and Delivery\n-After preparing all bottles, check the patient names and ensure that everything is correctly prepared.\n-Move the trolley to the designated area outside the patients' rooms so that nurses can easily collect the prepared feedings for use."
    },
    jp: {
      meaning: "経管栄養の準備",
      summary: "経管栄養の準備は、患者さん一人ひとりに、治療計画に従って正しい量の栄養剤を決められた時間に提供するため、慎重かつ正確に行う必要があります。",
      importance: "患者さん同士の栄養剤の取り違えを防ぎます。\n患者さんに指示された量の栄養剤を準備できます。\n準備時の間違いや汚染のリスクを減らします。",
      procedure: "1. 作業前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 経管栄養用のボトルを掛けたワゴン、栄養剤のパック、計量カップを準備します。\n- それぞれの栄養剤ボトルとチューブに、患者さんの名前が正しく表示されていることを確認します。\n2. 患者さんの名前と栄養剤の量の確認\n- 栄養剤のパックに貼られたラベルで、患者さんの名前と必要な栄養剤の量を確認します。\n- 栄養剤のパックに記載された名前と、使用するボトルに表示された患者さんの名前が一致していることを確認します。\n- 栄養剤には200mLと125mLの2種類があります。患者さんごとに指示された量に合わせて、使用する栄養剤を選び、計量します。\n- 300mLが必要で、200mL入りのパックが2個（合計400mL）用意されている場合は、計量カップに移し、300mLを正確に量ってから栄養剤ボトルに入れます。\n- ボトルに栄養剤を入れる前に、患者さんの名前と量をもう一度確認します。\n3. 栄養剤ボトルとチューブの準備\n- 計量した栄養剤を、該当する患者さんのボトルに入れます。\n- チューブのクランプを開き、栄養剤がチューブの中に満たされ、使用できる状態になるようにします。\n4. 最終確認と運搬\n- すべてのボトルの準備が終わったら、患者さんの名前と準備内容に間違いがないか、もう一度確認します。\n- 準備した栄養剤を看護師が使いやすいように、ワゴンを所定の場所まで移動し、患者さんの部屋の前に置きます。"
    }
  },
  {
    id: 3,
    titleJP: "水分準備",
    image: "images/image10.jpg",
    th: {
      meaning: "การเตรียมเครื่องดื่ม",
      summary: "การเตรียมเครื่องดื่ม เป็นงานที่ต้องใส่ใจในรายละเอียด เนื่องจากผู้ป่วยแต่ละคนมีความต้องการชนิดของเครื่องดื่ม ปริมาณ และระดับความหนืดที่แตกต่างกัน",
      importance: "เพื่อให้ผู้ป่วยได้รับเครื่องดื่มตามที่ต้องการ\nเพื่อให้ปริมาณเครื่องดื่มที่ผู้ป่วยได้รับตรงตามคำสั่งจากแพทย์\nเพื่อให้ผู้ป่วยได้รับระดับความข้นที่เหมาะสมกับข้อกำหนดด้านการกลืน",
      procedure: "1. การเตรียมตัวก่อนปฏิบัติงาน\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงานทุกครั้ง\n- เตรียมแก้วเครื่องดื่มของผู้ป่วยแต่ละคนให้พร้อม\n- ตรวจสอบว่าแก้วทุกใบมีป้ายชื่อผู้ป่วยติดอยู่\n2. การตรวจสอบชนิดเครื่องดื่ม\n- ตรวจสอบว่าผู้ป่วยแต่ละคนต้องการเครื่องดื่มชนิดใด ได้แก่ ชา กาแฟ น้ำแอปเปิล หรือน้ำเปล่า\n- ตรวจสอบว่าต้องการเครื่องดื่มร้อนหรือเย็น และผู้ป่วยต้องได้รับเครื่องดื่มแบบปกติหรือแบบเพิ่มความข้น โดยดูจากข้อมูลที่ระบุไว้บนแก้ว\n3. การกดเครื่องดื่ม\n- ใช้เครื่องกดเครื่องดื่มยี่ห้อとろみ โดยเลือกชนิดเครื่องดื่มและปริมาณตามที่กำหนดสำหรับผู้ป่วยแต่ละคน\n- หากผู้ป่วยต้องได้รับเครื่องดื่มแบบเพิ่มความข้น ให้เลือกตัวเลือกตามที่ระบุไว้ ได้แก่ とろみ、薄いとろみ หรือ 濃いとろみ\n4. การจัดเตรียมตามรอบเวลา\n- ตรวจสอบรอบเวลาที่ต้องเตรียมเครื่องดื่ม เช่น รอบเช้า รอบ 10.00 น. รอบอาหารกลางวัน รอบ 15.00 น. และรอบอาหารเย็น\n- เตรียมเครื่องดื่มตามชนิดและปริมาณที่กำหนดสำหรับแต่ละรอบ\n- ตรวจสอบความถูกต้องอีกครั้งก่อนนำไปแจกจ่ายให้กับผู้ป่วย"
    },
    en: {
      meaning: "Preparing beverages for patients.",
      summary: "Beverage preparation requires careful attention to detail because each patient may have different requirements regarding the type of beverage, the amount, and the level of thickness.",
      importance: "Ensures that patients receive their preferred or prescribed beverages.\nEnsures that the amount of beverage provided matches the doctor's instructions.\nEnsures that patients receive the appropriate beverage thickness according to their swallowing requirements.",
      procedure: "1. Preparation Before Work\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare the individual drink cups for each patient.\n- Check that every cup has the correct patient identification label.\n2. Checking the Type of Drink\n- Check which drink each patient requires, such as tea, coffee, apple juice, or water.\n- Check whether the drink should be hot or cold and whether it should have a regular or thickened consistency, according to the information indicated on the cup.\n3. Dispensing Drinks\n- Use the beverage dispenser with the とろみ function, selecting the type and amount of drink required for each patient.\n- If a patient requires a thickened drink, select the specified consistency: とろみ, 薄いとろみ, or 濃いとろみ.\n4. Preparing Drinks According to the Schedule\n- Check the scheduled preparation times, such as the morning round, 10:00 a.m., lunchtime, 3:00 p.m., and the evening meal.\n- Prepare the drinks according to the required type and amount for each round.\n- Double-check the drinks before distributing them to patients."
    },
    jp: {
      meaning: "患者さんに提供する飲み物の準備",
      summary: "水分準備は、一人ひとりの患者さんによって、必要な飲み物の種類、量、とろみの濃さが異なるため、細かい点まで注意して行う必要があります。",
      importance: "患者さんが必要とする飲み物を提供します。\n医師の指示に従い、適切な量の飲み物を準備します。\n患者さんの嚥下状態に合った適切なとろみの濃さを提供します。",
      procedure: "1. 作業前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 患者さん一人ひとりの飲み物用のコップを準備します。\n- すべてのコップに患者さんの名前が表示されていることを確認します。\n2. 飲み物の種類の確認\n- 患者さんごとに必要な飲み物の種類を確認します。飲み物は、お茶、コーヒー、りんごジュース、水などです。\n- コップに記載された情報を確認し、飲み物が温かいものか冷たいものか、また、とろみなし・とろみ付きのどちらが必要かを確認します。\n3. 飲み物の準備\n- 「とろみ」と表示された飲み物のディスペンサーを使用し、患者さんごとに指定された飲み物の種類と量を選択します。\n- とろみ付きの飲み物が必要な場合は、指示に従って「とろみ」「薄いとろみ」「濃いとろみ」の中から適切な設定を選択します。\n4. 時間ごとの準備\n- 飲み物を準備する時間を確認します。例えば、朝、10時、昼食時、15時、夕食時です。\n- それぞれの時間に指定された飲み物の種類と量を準備します。\n- 患者さんに配る前に、内容に間違いがないか、もう一度確認します。"
    }
  },
  {
    id: 4,
    titleJP: "洗い物（口腔ケア）",
    image: "images/image5.jpg",
    th: {
      meaning: "การล้างอุปกรณ์ดูแลช่องปาก",
      summary: "การล้างอุปกรณ์ดูแลช่องปาก เป็นงานที่ช่วยรักษาสุขอนามัยและลดความเสี่ยงในการแพร่กระจายของเชื้อโรค โดยอุปกรณ์ที่ใช้แล้ว เช่น แปรงสีฟัน แก้วน้ำ และภาชนะรองรับน้ำลาย ต้องได้รับการทำความสะอาดอย่างทั่วถึงและจัดเก็บให้เหมาะสม เพื่อให้พร้อมสำหรับการใช้งานครั้งต่อไป",
      importance: "เพื่อกำจัดคราบอาหาร น้ำลาย และสิ่งสกปรกที่ตกค้างบนอุปกรณ์\nเพื่อลดความเสี่ยงในการแพร่กระจายของเชื้อโรค\nเพื่อรักษาความสะอาดของอุปกรณ์ส่วนตัวของผู้ป่วย\nเพื่อเตรียมอุปกรณ์ให้พร้อมใช้งานในครั้งต่อไป",
      procedure: "1. การเตรียมตัวก่อนล้างอุปกรณ์\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงานทุกครั้ง\n- เตรียมบริเวณล้างอุปกรณ์ให้สะอาด\n- แยกอุปกรณ์ที่ใช้แล้วตามประเภท เช่น แปรงสีฟัน แก้วน้ำ และภาชนะรองรับน้ำลาย\n2. การล้างทำความสะอาด\n- ล้างคราบอาหาร น้ำลาย และเสมหะออกด้วยน้ำสะอาด และแช่ในถังน้ำที่มีน้ำยาฆ่าเชื้อ\n- ใช้ฟองน้ำร่วมกับน้ำยาทำความสะอาด ขัดถูบริเวณพื้นผิวและซอกมุมของอุปกรณ์อย่างทั่วถึง\n- ล้างด้วยน้ำสะอาดจนไม่มีคราบสกปรกหรือคราบน้ำยาหลงเหลืออยู่\n3. การทำให้แห้งและจัดเก็บ\n- วางอุปกรณ์ไว้ในบริเวณรถเข็นที่สะอาดและเหมาะสำหรับการผึ่งให้แห้ง"
    },
    en: {
      meaning: "Cleaning oral care equipment.",
      summary: "Washing oral care equipment helps maintain hygiene and reduce the risk of spreading infectious agents. Used items, such as toothbrushes, drinking cups, and saliva collection containers, must be cleaned thoroughly and stored appropriately so they are ready for the next use.",
      importance: "Removes food residue, saliva, and other dirt remaining on the equipment.\nReduces the risk of spreading germs.\nMaintains the cleanliness of each patient's personal equipment.\nEnsures that the equipment is ready for the next use.",
      procedure: "1. Preparation Before Cleaning\n-Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Ensure that the equipment-washing area is clean.\n- Separate the used items by type, such as toothbrushes, drinking cups, and saliva collection containers.\n2. Cleaning and Washing\n- Rinse off food residue, saliva, and sputum with clean water, then soak the items in a container filled with water and disinfectant.\n- Use a sponge and cleaning solution to scrub all surfaces and corners of the equipment thoroughly.\n- Rinse with clean water until no dirt or cleaning solution remains.\n3. Drying and Storage\n- Place the equipment in a clean, suitable area of the trolley and allow it to air-dry."
    },
    jp: {
      meaning: "口腔ケア用品の洗浄",
      summary: "口腔ケア用品の洗浄は、衛生状態を保ち、細菌などの感染拡大のリスクを減らすために重要な業務です。使用済みの歯ブラシ、コップ、唾液受けなどは、十分に洗浄し、適切に保管して、次回も使用できる状態にしておきます。",
      importance: "器具に残った食べかす、唾液、その他の汚れを取り除きます。\n細菌などが広がるリスクを減らします。\n患者さん個人の口腔ケア用品を清潔に保ちます。\n次回の使用に備えて、器具を使用できる状態に整えます。",
      procedure: "1. 洗浄前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 洗浄する場所が清潔であることを確認します。\n- 使用済みの歯ブラシ、コップ、唾液受けなどを種類ごとに分けます。\n2. 洗浄\n- 食べかす、唾液、痰などを流水で洗い流し、その後、消毒液を入れた水に浸します。\n- スポンジと洗浄剤を使用し、器具の表面や隅々まで丁寧にこすり洗いします。\n- 汚れや洗浄剤が残らないように、きれいな水で十分にすすぎます。\n3. 乾燥・保管\n- 洗浄した器具を、ワゴン内の清潔で適切な場所に置き、自然乾燥させます。"
    }
  },
  {
    id: 5,
    titleJP: "経管栄養ボトル洗浄・消毒",
    image: "images/image1.jpg",
    th: {
      meaning: "การล้างและฆ่าเชื้อขวดอาหารทางสายยาง",
      summary: "การล้างและฆ่าเชื้อขวดอาหารทางสายยาง เป็นการกำจัดคราบอาหารและเตรียมอุปกรณ์ให้สะอาด พร้อมสำหรับการนำกลับมาใช้งานอย่างปลอดภัย",
      importance: "เพื่อกำจัดอาหารและคราบตกค้างในขวดและสาย\nเพื่อลดความเสี่ยงจากการปนเปื้อนของเชื้อโรค\nเพื่อรักษาความสะอาดของอุปกรณ์ให้อาหารทางสาย\nเพื่อเตรียมขวดให้พร้อมสำหรับการนำกลับมาใช้งาน",
      procedure: "1. การเตรียมตัวก่อนล้าง\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มล้างอุปกรณ์\n- เตรียมขวดให้อาหารและสายให้อาหารที่ใช้แล้ว\n2. การล้างขวดและสายให้อาหาร\n- นำขวดให้อาหารทีละขวดมาเปิดน้ำก๊อกใส่ขวด แล้วเทน้ำทิ้ง ทำซ้ำทั้งหมด 3 ครั้ง และในครั้งที่ 4 ให้เติมน้ำลงในขวดและเปิดทางสายให้น้ำไหลผ่านสายให้อาหาร\n- วางหรือพาดขวดและสายไว้ในตำแหน่งที่เหมาะสม เพื่อให้น้ำระบายออกจนหมด\n- เมื่อระบายน้ำออกจากสายจนหมดแล้ว ให้ถอดสายยางออกจากขวด\n- นำสายยางมัดและใส่ถุงตรงปลายสายเพื่อไม่ให้น้ำหยดลงพื้น แล้วแขวนไว้ให้แห้ง\n3. การฆ่าเชื้อและจัดเก็บ\n- นำขวดให้อาหารเข้าเครื่องฆ่าเชื้อด้วยความร้อน และหมุนเวลาเครื่องเป็น 30 นาที\n- หลังเครื่องทำงานเสร็จ ตรวจสอบขวดและนำไปแขวนบนรถเข็น เพื่อเตรียมใช้งานครั้งต่อไป"
    },
    en: {
      meaning: "Cleaning and disinfecting tube feeding bottles.",
      summary: "Cleaning and disinfecting tube feeding bottles removes food residue and ensures that the equipment is clean and ready for safe reuse.",
      importance: "Removes formula and residue from the bottles and feeding tubes.\nReduces the risk of contamination by germs.\nMaintains the cleanliness of tube feeding equipment.\nPrepares the bottles for safe reuse.",
      procedure: "1. Preparation Before Cleaning\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting to clean the equipment.\n- Prepare the used feeding bottles and feeding tubes.\n2. Cleaning the Feeding Bottles and Tubes\n- Clean each feeding bottle individually by filling it with tap water and then pouring the water out. Repeat this process three times. On the fourth rinse, fill the bottle with water and open the tube clamp to allow water to flow through the feeding tube.\n- Place or hang the bottles and tubes in a suitable position to allow all the water to drain out.\n- Once all the water has drained from the tube, disconnect the tube from the bottle.\n- Bundle the tube, place a bag over its end to prevent water from dripping onto the floor, and hang it up to dry.\n3. Disinfection and Storage\n- Place the feeding bottles in the heat sterilizer and set the timer to 30 minutes.\n- When the sterilization cycle is complete, check the bottles and hang them on the trolley so they are ready for the next use."
    },
    jp: {
      meaning: "経管栄養ボトルの洗浄と消毒",
      summary: "経管栄養ボトルの洗浄・消毒は、栄養剤の残りや汚れを取り除き、器具を清潔に保ち、安全に再使用できる状態にするための作業です。",
      importance: "ボトルやチューブに残った栄養剤や汚れを取り除きます。\n細菌などによる汚染のリスクを減らします。\n経管栄養に使用する器具を清潔に保ちます。\nボトルを次回も安全に使用できる状態にします。",
      procedure: "1. 洗浄前の準備\n- 洗浄を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 使用済みの経管栄養ボトルとチューブを準備します。\n2. ボトルとチューブの洗浄\n- ボトルを1本ずつ水道水で満たし、水を捨てます。この作業を3回繰り返します。4回目はボトルに水を入れ、チューブのクランプを開いて、水をチューブの中に流します。\n- ボトルとチューブを適切な位置に置く、または掛けて、水が完全に抜けるようにします。\n- チューブ内の水が完全に抜けたら、チューブをボトルから取り外します。\n- チューブを束ね、床に水が垂れないようにチューブの先端に袋をかぶせて、乾燥するまで吊るします。\n3. 消毒と保管\n- 経管栄養ボトルを加熱消毒器に入れ、タイマーを30分に設定します。\n- 消毒が終了したらボトルの状態を確認し、次回使用できるようにワゴンに掛けて保管します。"
    }
  },
  {
    id: 6,
    titleJP: "吸引ボトル交換・洗浄・消毒",
    image: "images/image7.jpg",
    th: {
      meaning: "การเปลี่ยนและล้างขวดดูดเสมหะ",
      summary: "การเปลี่ยนและล้างขวดดูดเสมหะ เป็นงานสำคัญในการควบคุมการติดเชื้อ เพื่อป้องกันการแพร่กระจายของเชื้อโรคจากเสมหะของผู้ป่วย",
      importance: "เพื่อเปลี่ยนอุปกรณ์ที่ใช้แล้วให้เป็นชุดใหม่\nเพื่อลดความเสี่ยงจากการปนเปื้อนของเชื้อโรค\nเพื่อให้ผู้ป่วยมีอุปกรณ์ดูดเสมหะพร้อมใช้งาน\nเพื่อป้องกันการสลับขวดหรืออุปกรณ์ระหว่างผู้ป่วย",
      procedure: "1. การเตรียมตัวและอุปกรณ์\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงาน\n- เตรียมรถเข็นที่มีขวดดูดเสมหะใหม่ สายดูดเสมหะใหม่ และถุงรองรับของเสียใหม่\n- เตรียมถุงขยะขนาดใหญ่สำหรับรวบรวมสายและถุงรองรับของเสียที่ใช้แล้ว\n2. การถอดอุปกรณ์เก่าและติดตั้งอุปกรณ์ใหม่\n- เข็นรถไปยังห้องผู้ป่วยที่ต้องเปลี่ยนอุปกรณ์\n- ตรวจสอบชื่อผู้ป่วยอีกครั้งก่อนถอดอุปกรณ์\n- ถอดขวดดูดเสมหะ สายดูดเสมหะ และถุงรองรับของเสียเก่า\n- นำสายดูดเสมหะและถุงรองรับของเสียที่ใช้แล้วใส่ในถุงขยะขนาดใหญ่เพื่อรอนำไปทิ้ง\n- วางขวดเก่าแยกไว้บนรถเข็น เพื่อแยกออกจากขวดใหม่\n- นำขวดใหม่ที่มีชื่อผู้ป่วยตรงกันไปติดตั้ง พร้อมสายดูดเสมหะและถุงรองรับของเสียชุดใหม่\n3. การตรวจสอบหลังเปลี่ยนอุปกรณ์\n- จัดเก็บขวดเก่าแยกจากอุปกรณ์ใหม่ และนำสายกับถุงเก่าไปทิ้ง\n- ทำความสะอาดขวดเก่าที่ใช้แล้ว โดยการเปิดน้ำก๊อกใส่ในถังน้ำ และใส่น้ำยาฆ่าเชื้อลงไป และเทน้ำจากขวดเก่าทิ้งและนำขวดลงไปแช่ในถังน้ำ หลังจากแช่ครบ 1 ชั่วโมงให้ล้างขวดด้วยฟองน้ำและล้างออกด้วยน้ำสะอาดอีกครั้ง และนำไปตากไว้บนรถเข็น\n- ถอดถุงมือและผ้ากันเปื้อน แล้วล้างมือให้สะอาด"
    },
    en: {
      meaning: "Replacing, cleaning, and disinfecting suction bottles.",
      summary: "Replacing, cleaning, and disinfecting suction bottles is an important infection control task. It helps prevent the spread of germs from patients' sputum and ensures that suction equipment is ready for use.",
      importance: "Replaces used equipment with a new set.\nReduces the risk of contamination by germs.\nEnsures that suction equipment is ready for patients to use.\nPrevents bottles and equipment from being mixed up between patients.",
      procedure: "1. Preparation and Equipment\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare a trolley containing new suction bottles, new suction tubes, and new waste collection bags.\n- Prepare a large waste bag for collecting used suction tubes and waste collection bags.\n2. Removing Old Equipment and Installing New Equipment\n- Move the trolley to the rooms of patients who need their equipment replaced.\n- Check the patient's name again before removing any equipment.\n- Remove the old suction bottle, suction tube, and waste collection bag.\n- Place the used suction tube and waste collection bag in the large waste bag for disposal.\n- Keep the old bottle separate from the new equipment on the trolley.\n- Install a new bottle bearing the correct patient's name, together with a new suction tube and waste collection bag.\n3. Post-Replacement Checks and Cleaning\n- Keep the old bottles separate from the new equipment, and dispose of the used tubes and bags.\n- Clean the used bottles by filling a container with tap water and adding disinfectant. Empty the water from the old bottles and soak them in the container for one hour. After soaking, scrub the bottles with a sponge, rinse them again with clean water, and place them on the trolley to air-dry.\n-Remove your gloves and apron, then wash your hands thoroughly."
    },
    jp: {
      meaning: "吸引ボトルの交換・洗浄・消毒",
      summary: "吸引ボトルの交換・洗浄・消毒は、感染予防のために重要な業務です。患者さんの痰などを介した細菌の拡散を防ぎ、吸引器具を使用できる状態に保ちます。",
      importance: "使用済みの器具を新しい器具に交換します。\n細菌などによる汚染のリスクを減らします。\n患者さんが吸引器具を使用できる状態に保ちます。\n患者さん同士でボトルや器具を取り違えることを防ぎます。",
      procedure: "1. 作業前の準備と器具の確認\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 新しい吸引ボトル、新しい吸引チューブ、新しい廃液バッグを載せたワゴンを準備します。\n- 使用済みの吸引チューブと廃液バッグをまとめて廃棄するための大きなごみ袋を準備します。\n2. 古い器具の取り外しと新しい器具の取り付け\n- 器具の交換が必要な患者さんの部屋までワゴンを移動します。\n- 器具を取り外す前に、患者さんの名前をもう一度確認します。\n- 古い吸引ボトル、吸引チューブ、廃液バッグを取り外します。\n- 使用済みの吸引チューブと廃液バッグは、大きなごみ袋に入れて廃棄します。\n- 古いボトルは新しい器具と混ざらないように、ワゴンの上で分けて置きます。\n- 患者さんの名前が正しく表示された新しいボトルを取り付け、新しい吸引チューブと廃液バッグを接続します。\n3. 交換後の確認と洗浄\n- 古いボトルは新しい器具と分けて保管し、使用済みのチューブと廃液バッグを廃棄します。\n- 使用済みのボトルを洗浄します。容器に水道水を入れて消毒液を加え、古いボトル内の水を捨ててから、ボトルを容器の中に1時間浸します。1時間後、スポンジでボトルをこすり洗いし、きれいな水ですすいでから、ワゴンの上に置いて自然乾燥させます。\n- 手袋とエプロンを外し、手をきれいに洗います。"
    }
  },
  {
    id: 7,
    titleJP: "オムツ・リネン補充",
    image: "images/image11.jpg",
    th: {
      meaning: "การเติมผ้าอ้อมและผ้าปูที่นอน",
      summary: "การเติมผ้าอ้อมและผ้าปูที่นอน รวมถึงปลอกหมอน ทำเพื่อให้มีอุปกรณ์เพียงพอและพร้อมใช้งานสำหรับผู้ป่วยในแต่ละวัน",
      importance: "เพื่อให้ผู้ป่วยมีผ้าอ้อมและผ้าลินินพร้อมใช้งาน\nเพื่อให้ลิ้นชักของผู้ป่วยมีอุปกรณ์เพียงพอ\nเพื่อช่วยให้การดูแลผู้ป่วยดำเนินไปอย่างต่อเนื่อง",
      procedure: "1. การเตรียมตัวและตรวจสอบอุปกรณ์\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงาน\n- เตรียมรถเข็นสำหรับขนย้ายผ้าอ้อมและผ้าลินิน\n- นำผ้าอ้อมหลายชนิดและหลายขนาดจากห้องเก็บของ รวมถึงผ้าปูที่นอน ปลอกหมอน และปลอกผ้าห่ม\n- ตรวจสอบจำนวนและชนิดของอุปกรณ์ที่ต้องนำไปเติมในแต่ละห้อง\n2. การตรวจสอบและเติมผ้าอ้อมกับผ้าลินิน\n- ตรวจสอบผ้าอ้อมที่มีอยู่เดิมในลิ้นชักของผู้ป่วย เพื่อดูว่าใช้ชนิดและขนาดใด\n- หากผ้าอ้อมหมดหรือไม่แน่ใจว่าผู้ป่วยใช้ชนิดใด ให้สอบถาม ヘルパーさん ก่อนนำไปเติม\n- เติมผ้าอ้อมชนิดและขนาดที่ถูกต้องลงในลิ้นชักให้เพียงพอ\n- เตรียมผ้าปูที่นอน ปลอกหมอน และปลอกผ้าห่มไว้คนละ 1 ชุดในลิ้นชักของผู้ป่วยแต่ละคน\n3. การตรวจสอบหลังเติม\n- ตรวจสอบว่าผ้าอ้อมที่เติมตรงกับชนิดและขนาดที่ผู้ป่วยใช้\n- ตรวจสอบว่าผ้าปูที่นอน ปลอกหมอน และปลอกผ้าห่มมีครบคนละ 1 ชุด\n- จัดเรียงอุปกรณ์ในลิ้นชักให้เป็นระเบียบและหยิบใช้งานได้สะดวก"
    },
    en: {
      meaning: "Restocking diapers and linen.",
      summary: "Restocking includes diapers, bed sheets, pillowcases, and blanket covers to ensure that sufficient supplies are available and ready for patient care.",
      importance: "Ensures that patients have diapers and linen available when needed.\nKeeps each patient's drawer adequately stocked.\nHelps patient care continue smoothly without unnecessary interruptions.",
      procedure: "1. Preparation and Equipment Check\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare a trolley for transporting diapers and linen.\n- Collect diapers of different types and sizes from the storage room, along with bed sheets, pillowcases, and blanket covers.\n- Check the quantities and types of supplies needed for each room.\n2. Checking and Restocking Diapers and Linen\n- Check the diapers already in each patient's drawer to identify the type and size they use.\n- If the diapers are out of stock or you are unsure which type the patient uses, ask a care worker (ヘルパーさん) before restocking.\n- Replenish the drawer with a sufficient quantity of the correct diaper type and size.\n- Place one set of linen in each patient's drawer: one bed sheet, one pillowcase, and one blanket cover.\n3. Final Checks\n- Confirm that the diapers provided match the patient's usual type and size.\n- Check that each patient has one complete set of linen: a bed sheet, a pillowcase, and a blanket cover.\n- Arrange the supplies neatly in the drawer so they are easy to access."
    },
    jp: {
      meaning: "オムツとリネンの補充",
      summary: "オムツ、ベッドシーツ、枕カバー、掛け布団カバーなどを補充し、患者さんのケアに必要な物品を十分に用意して、いつでも使用できる状態にします。",
      importance: "患者さんが必要なときにオムツやリネンを使用できるようにします。\n患者さん一人ひとりの引き出しに必要な物品をそろえます。\n物品不足による中断を防ぎ、患者さんのケアを円滑に進めます。",
      procedure: "1. 作業前の準備と物品の確認\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- オムツやリネンを運ぶためのワゴンを準備します。\n- 倉庫から、種類やサイズの異なるオムツ、ベッドシーツ、枕カバー、掛け布団カバーを用意します。\n- 各部屋で補充する物品の種類と数量を確認します。\n2. オムツとリネンの確認・補充\n- 患者さんの引き出しに入っているオムツを確認し、使用している種類とサイズを把握します。\n- オムツが不足している場合や、使用する種類が分からない場合は、補充する前にヘルパーさんに確認します。\n- 患者さんが使用している正しい種類とサイズのオムツを、十分な量だけ補充します。\n- 患者さん一人ひとりの引き出しに、ベッドシーツ、枕カバー、掛け布団カバーを各1枚ずつ、1セット用意します。\n3. 補充後の確認\n- 補充したオムツの種類とサイズが、患者さんの使用しているものと一致していることを確認します。\n- ベッドシーツ、枕カバー、掛け布団カバーが各1枚ずつ、1セットそろっていることを確認します。\n- 物品を引き出しの中に整然と並べ、取り出しやすい状態にします。"
    }
  },
  {
    id: 8,
    titleJP: "ベッドメーキング（リネン交換）",
    image: "images/image12.jpg",
    th: {
      meaning: "การเปลี่ยนผ้าปูที่นอน",
      summary: "การเปลี่ยนผ้าปูที่นอน เป็นส่วนหนึ่งของการดูแลผู้ป่วยที่ช่วยส่งเสริมด้านสุขอนามัย ช่วยลดความเสี่ยงจากสิ่งสกปรกที่อาจส่งผลต่อสุขภาพของผู้ป่วย",
      importance: "เพื่อรักษาความสะอาดของเตียงผู้ป่วย\nเพื่อลดการสะสมของสิ่งสกปรกและความชื้น\nเพื่อช่วยให้ผู้ป่วยพักผ่อนได้อย่างสบาย\nเพื่อช่วยลดการระคายเคืองผิวหนังจากผ้าที่เปียกชื้นหรือมีรอยย่น",
      procedure: "1. การเตรียมตัวก่อนเปลี่ยนผ้า\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงาน\n- เตรียมผ้าปูที่นอน ปลอกหมอน และปลอกผ้าห่มชุดใหม่ให้ครบ\n- เตรียมถุงสำหรับใส่ผ้าที่ใช้แล้ว\n- หากต้องเคลื่อนย้ายหรือพลิกตัวผู้ป่วย ให้แจ้งผู้ป่วยก่อนจะทำ\n2. การนำผ้าเก่าออกและเปลี่ยนผ้า\n- นำผ้าที่ใช้แล้วออกอย่างระมัดระวัง โดยไม่สะบัดผ้าเพื่อป้องกันสิ่งสกปรกฟุ้งกระจาย\n- หากผู้ป่วยยังอยู่บนเตียง ให้ทำร่วมกับเจ้าหน้าที่เพื่อช่วยจัดท่าหรือพลิกตัวผู้ป่วยอย่างปลอดภัย\n- เปลี่ยนผ้าปูที่นอนให้เรียบและตึงพอดี\n- เปลี่ยนปลอกหมอนและปลอกผ้าห่มให้เป็นชุดสะอาด\n- ระมัดระวังไม่ให้ผ้าสกปรกสัมผัสกับผ้าสะอาด\n3. การตรวจสอบหลังเปลี่ยนผ้า\n- ตรวจสอบว่าผ้าปูที่นอนเรียบ ไม่มีรอยย่นที่อาจกดทับผิวหนังผู้ป่วย\n- จัดหมอนและผ้าห่มให้เหมาะสม\n- จัดท่าผู้ป่วยให้สบายและปลอดภัย หากมีการช่วยพลิกตัวหรือเคลื่อนย้าย\n- นำผ้าเก่าที่ใช้แล้วไปใส่ในถุงจัดเก็บผ้า\n- ถอดถุงมือและผ้ากันเปื้อน แล้วล้างมือให้สะอาด"
    },
    en: {
      meaning: "Bed Making and Linen Changing",
      summary: "Changing bed linen is an important part of patient care. It promotes hygiene and helps reduce the health risks associated with dirt and other contaminants.",
      importance: "Maintains the cleanliness of the patient's bed.\nReduces the accumulation of dirt and moisture.\nHelps patients rest comfortably.\nReduces skin irritation caused by damp or wrinkled linen.",
      procedure: "1. Preparation Before Changing Linen\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare a complete clean set of linen, including a bed sheet, pillowcase, and blanket cover.\n- Prepare a bag for used linen.\n- If the patient needs to be moved or turned, explain this to the patient before starting.\n2. Removing Old Linen and Replacing It\n- Remove the used linen carefully without shaking it, to prevent dirt and contaminants from spreading into the air.\n-If the patient remains in bed, work with another staff member to reposition or turn the patient safely.\n- Replace the bed sheet and ensure it is smooth and appropriately fitted.\n- Replace the pillowcase and blanket cover with clean ones.\n- Avoid allowing used linen to touch clean linen.\n3. Final Checks After Changing Linen\n- Check that the bed sheet is smooth and free of wrinkles that could put pressure on the patient's skin.\n- Arrange the pillow and blanket appropriately.\n- If the patient has been moved or turned, ensure that they are positioned comfortably and safely.\n- Place the used linen in the designated laundry bag.\n- Remove your gloves and apron, then wash your hands thoroughly."
    },
    jp: {
      meaning: "ベッドリネンの交換",
      summary: "ベッドリネンの交換は、患者さんのケアにおいて重要な業務です。衛生状態を保ち、汚れなどが患者さんの健康に与えるリスクを減らします。",
      importance: "患者さんのベッドを清潔に保ちます。\n汚れや湿気の蓄積を防ぎます。\n患者さんが快適に休めるようにします。\n湿ったリネンやしわによる皮膚への刺激を減らします。",
      procedure: "1. リネン交換前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- ベッドシーツ、枕カバー、掛け布団カバーの清潔なセットを準備します。\n- 使用済みリネンを入れる袋を準備します。\n- 患者さんの体位を変えたり、移動させたりする場合は、始める前に患者さんに説明します。\n2. 古いリネンの取り外しと交換\n- 汚れが空気中に広がらないよう、使用済みリネンを振らずに丁寧に取り外します。\n- 患者さんがベッドにいる場合は、他のスタッフと協力して、安全に体位変換を行います。\n- ベッドシーツを交換し、しわがなく、適切に張られていることを確認します。\n- 枕カバーと掛け布団カバーを清潔なものに交換します。\n- 使用済みリネンが清潔なリネンに触れないように注意します。\n3. 交換後の確認\n- ベッドシーツにしわがなく、患者さんの皮膚を圧迫する部分がないことを確認します。\n- 枕と掛け布団を適切に整えます。\n- 患者さんの体位を変えたり移動させたりした場合は、安全で快適な姿勢になっていることを確認します。\n- 使用済みリネンを所定の回収袋に入れます。\n- 手袋とエプロンを外し、手をきれいに洗います。"
    }
  },
  {
    id: 9,
    titleJP: "移送介助（移乗）・車椅子・ストレッチャー",
    image: "images/image4.jpg",
    th: {
      meaning: "การเคลื่อนย้ายผู้ป่วย",
      summary: "การเคลื่อนย้ายผู้ป่วย ต้องคำนึงถึงความปลอดภัยเป็นสำคัญ เพื่อป้องกันการพลัดตกหกล้มและการบาดเจ็บระหว่างการเคลื่อนย้าย ควรประเมินสภาพร่างกายของผู้ป่วย ตรวจสอบอุปกรณ์ให้พร้อมใช้งาน และใช้วิธีเคลื่อนย้ายที่เหมาะสมกับผู้ป่วยแต่ละคน",
      importance: "เพื่อลดความเสี่ยงต่อการหกล้มหรือการบาดเจ็บของผู้ป่วย\nเพื่อช่วยให้การเคลื่อนย้ายเป็นไปอย่างเหมาะสมกับสภาพร่างกายของผู้ป่วย",
      procedure: "1. กรณีใช้เปลนอน (Stretcher)\n- ใช้แผ่นสไลด์ (Sliding board) ช่วยในการเลื่อนตัวผู้ป่วย\n- ต้องใช้เจ้าหน้าที่หลายคนร่วมมือกัน โดยแบ่งหน้าที่ เช่น คนช่วยดึงและคนช่วยผลัก เพื่อความปลอดภัยและป้องกันการบาดเจ็บบริเวณหลังของผู้ปฏิบัติงาน\n2. กรณีใช้รถเข็นนั่ง (Wheelchair)\n- ผู้เชี่ยวชาญ เช่น พยาบาลหรือเจ้าหน้าที่ที่มีความชำนาญ จะเป็นผู้ยกหรือย้ายตัวผู้ป่วย\n- บทบาทของเรา: ประคองรถเข็นให้มั่นคง ช่วยล็อกล้อรถเข็นให้เรียบร้อยเพื่อความปลอดภัย และเป็นผู้เข็นรถพาผู้ป่วยไปยังจุดหมาย\nข้อควรคำนึง:\nความปลอดภัยเป็นอันดับแรก ตรวจสอบการล็อกล้อและอุปกรณ์พยุงตัวให้แน่นหนาทุกครั้งก่อนเคลื่อนย้าย ต้องสื่อสารกับทีมและผู้ป่วยให้เข้าใจตรงกันก่อนเริ่มเคลื่อนย้ายเสมอ"
    },
    en: {
      meaning: "Assisting with patient transfers and transportation.",
      summary: "Patient transfers must prioritize safety to prevent falls and injuries. Assess the patient's physical condition, check that the equipment is ready for use, and use a transfer method appropriate for each patient.",
      importance: "Reduces the risk of falls and injuries.\nEnsures that transfers are appropriate for each patient's physical condition.",
      procedure: "1. Using a Stretcher\n- Use a sliding board to help move the patient.\n- Several staff members must work together, with roles divided as appropriate, such as pulling and pushing, to improve safety and reduce the risk of back injuries among staff.\n2. Using a Wheelchair\n- A qualified person, such as a nurse or trained staff member, performs the patient's lifting or transfer.\n- Your role is to stabilize the wheelchair, ensure that its brakes are securely locked when required for the transfer, and push the wheelchair to the destination once the patient is safely positioned.\n- Important Safety Considerations.\n- Safety comes first. Always check that the brakes and support equipment are secure before a transfer. Communicate clearly with the patient and the team before beginning."
    },
    jp: {
      meaning: "患者さんの移乗・移送の介助",
      summary: "患者さんの移乗や移送では、安全を最優先にし、転倒やけがを防ぐ必要があります。患者さんの身体状況を確認し、器具が使用できる状態であることを確かめたうえで、一人ひとりに適した方法で介助します。",
      importance: "患者さんの転倒やけがのリスクを減らします。\n患者さんの身体状況に適した方法で移乗・移送を行います。",
      procedure: "1. ストレッチャーを使用する場合\n- スライディングボードを使用して、患者さんの身体を滑らせながら移動させます。\n- 複数のスタッフが協力して介助します。引く役割、押す役割などを分担し、安全性を高めるとともに、介助するスタッフの腰への負担やけがを防ぎます。\n2. 車椅子を使用する場合\n- 看護師や介助に習熟したスタッフなど、適切な知識と技術を持つ人が患者さんの抱え上げや移乗を行います。\n- 自分の役割は、車椅子を安定させ、必要な場面でブレーキが確実にかかっていることを確認し、患者さんが安全に座った後、目的地まで車椅子を押して移動することです。\n注意事項\n- 安全を最優先にします。移乗を始める前に、車椅子のブレーキや身体を支える器具が確実に固定されていることを確認します。また、開始前に患者さんとスタッフ間で十分にコミュニケーションを取り、動作の手順を共有します。"
    }
  },
  {
    id: 10,
    titleJP: "コミュニケーション",
    image: "images/image2.jpg",
    th: {
      meaning: "การพูดคุยสื่อสาร ถามสารทุกข์สุกดิบกับผู้ป่วย",
      summary: "การพูดคุยสื่อสาร ไม่เพียงช่วยฝึกทักษะการพูดภาษาญี่ปุ่นของเราเท่านั้น แต่ยังช่วยสร้างความสัมพันธ์ที่ดี และป้องกันไม่ให้ผู้สูงอายุรู้สึกเหงาหรือโดดเดี่ยว",
      importance: "เพื่อพัฒนาทักษะการพูดและการฟังภาษาญี่ปุ่นในสถานการณ์จริง\nเพื่อลดความวิตกกังวลและความรู้สึกโดดเดี่ยวของผู้ป่วย\nเพื่อช่วยให้เข้าใจความต้องการของผู้ป่วย",
      procedure: "1. การทักทายและถามไถ่\n- ทักทายด้วยรอยยิ้มและน้ำเสียงที่เป็นมิตรเมื่อพบหน้า เช่น 「おはようございます」「お元気ですか？」\n- ชวนพูดคุยเรื่องทั่วไปในชีวิตประจำวัน และถามไถ่ความรู้สึกหรือความเป็นอยู่ เช่น วันนี้เป็นอย่างไรบ้าง หรือรับประทานอาหารอร่อยไหม\n2. การเป็นผู้ฟังที่ดี\n- ตั้งใจฟังเวลาผู้สูงอายุพูด พยักหน้ารับรู้ และแสดงความใส่ใจ\n- ใช้ภาษาที่เข้าใจง่าย และพูดช้าและชัดเจน เพื่อให้ผู้สูงอายุเข้าใจได้ง่าย\nข้อควรคำนึง:\nควรใช้น้ำเสียงนุ่มนวลและเป็นมิตร รวมถึงใช้ภาษากายประกอบ เช่น การยิ้มและสบตา เพื่อให้ผู้สูงอายุรู้สึกสบายใจ\nหากผู้สูงอายุพูดช้าหรือฟังไม่ค่อยชัด ควรมีความอดทนและใจเย็นในการพูดคุยเสมอ"
    },
    en: {
      meaning: "Talking with patients and asking how they are doing.",
      summary: "Communication helps develop your Japanese speaking skills while building positive relationships with patients and helping prevent them from feeling lonely or isolated.",
      importance: "Develops Japanese speaking and listening skills in real-life situations.\nHelps reduce patients' anxiety and feelings of isolation.\nHelps you understand patients' needs.",
      procedure: "1. Greeting and Checking In\n- Greet patients with a smile and a friendly tone, for example, \"おはようございます\" (Good morning) or \"お元気ですか？\" (How are you?).\n- Start conversations about everyday topics and ask how they are feeling, such as how their day is going or whether they enjoyed their meal.\n2. Being a Good Listener\n- Listen attentively when patients speak, nod to show that you are following, and demonstrate interest.\n- Use simple language and speak slowly and clearly to make it easier for patients to understand.\n- Important Considerations\n- Use a gentle, friendly tone and supportive body language, such as smiling and making appropriate eye contact, to help patients feel comfortable.\n- If a patient speaks slowly or is difficult to understand, remain patient and calm throughout the conversation."
    },
    jp: {
      meaning: "患者さんとの会話や日常的な声かけ",
      summary: "患者さんとのコミュニケーションは、日本語の会話力を身につけるだけでなく、患者さんとの良好な関係を築き、孤独感や孤立感を和らげることにもつながります。",
      importance: "実際の場面を通して、日本語の会話力と聞き取り能力を高めます。\n患者さんの不安や孤独感を和らげます。\n患者さんの希望や必要としていることを理解しやすくします。",
      procedure: "1. あいさつと声かけ\n- 患者さんに会ったら、笑顔で親しみやすい声であいさつします。例えば、「おはようございます」「お元気ですか？」などと声をかけます。\n- 日常生活の話題を取り上げ、その日の体調や気分、食事がおいしかったかどうかなどを尋ねます。\n2. 相手の話をよく聞く\n- 患者さんが話しているときは、注意深く耳を傾け、うなずきながら関心を示します。\n- 患者さんが理解しやすいように、分かりやすい言葉を使い、ゆっくり、はっきりと話します。\n注意事項\n- 患者さんが安心できるように、穏やかで親しみやすい声で話します。笑顔や適切なアイコンタクトなどのボディランゲージも活用します。\n- 患者さんの話す速度がゆっくりだったり、話が聞き取りにくかったりする場合も、焦らず、落ち着いて対応します。"
    }
  },
  {
    id: 11,
    titleJP: "排泄交換",
    image: "images/image9.jpg",
    th: {
      meaning: "การเปลี่ยนผ้าอ้อม",
      summary: "การเปลี่ยนผ้าอ้อมให้ผู้ป่วย เป็นการช่วยรักษาความสะอาดของร่างกาย ป้องกันการอับชื้นและการระคายเคืองของผิวหนัง โดยต้องทำอย่างระมัดระวัง คำนึงถึงความเป็นส่วนตัวและความปลอดภัยของผู้ป่วย",
      importance: "เพื่อป้องกันการเกิดแผลกดทับ ผื่นผ้าอ้อม และการติดเชื้อ\nเพื่อรักษาความสะอาดและความแห้งสบายตัวให้กับผู้ป่วยตลอดวัน\nเพื่อเพิ่มประสิทธิภาพในการทำงานเป็นทีม การร่วมมือกันหลายคนช่วยให้งานเสร็จเร็วและลดภาระทางร่างกาย เช่น การเปลี่ยนผ้าอ้อมรอบเช้าและบ่าย",
      procedure: "1. การเตรียมตัวก่อนเปลี่ยนผ้าอ้อม\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงาน\n- เตรียมผ้าอ้อมใหม่ อุปกรณ์เช็ดทำความสะอาด และถุงสำหรับทิ้งผ้าอ้อมใช้แล้ว\n- ตรวจสอบอุปกรณ์ให้พร้อมก่อนเข้าไปดูแลผู้ป่วย\n- ปิดม่านเพื่อรักษาความเป็นส่วนตัวของผู้ป่วย\n- แจ้งผู้ป่วยก่อนเริ่มว่าจะช่วยเปลี่ยนผ้าอ้อมและทำความสะอาด พร้อมอธิบายขั้นตอนอย่างสุภาพ\n2. การช่วยพลิกตัวและเปลี่ยนผ้าอ้อม\n- ช่วยพลิกตัวผู้ป่วยไปทีละด้าน โดยประสานงานกับヘルパーさんหรือพยาบาล\n- ถอดผ้าอ้อมเดิมอย่างระมัดระวัง และทำความสะอาดบริเวณที่เปื้อน\n- ช่วยเช็ดทำความสะอาดตามขั้นตอน โดยเริ่มจากบริเวณด้านหน้าไปยังบริเวณด้านหลัง\n- เปลี่ยนผ้าอ้อมใหม่ให้เรียบร้อย โดยจัดให้อยู่ในตำแหน่งที่เหมาะสมและไม่รัดแน่นเกินไป\n3. การตรวจสอบหลังเปลี่ยนผ้าอ้อม\n- จัดเสื้อผ้าและผ้าห่มให้เรียบร้อย พร้อมจัดท่านอนให้สบาย\n- ทิ้งผ้าอ้อมที่ใช้แล้วและผ้าเช็ดทำความสะอาดลงในถังขยะเฉพาะ\n- หากพบผิวหนังแดง แผล หรือความผิดปกติ ให้แจ้งพยาบาลหรือ ヘルパーさん\n- เมื่อเปลี่ยนผ้าอ้อมเสร็จแล้ว 1 ท่าน ให้ถอดถุงมือทิ้ง และใส่อันใหม่ถึงจะไปเปลี่ยนผ้าอ้อมให้ผู้ป่วยท่านอื่นได้"
    },
    en: {
      meaning: "Changing patients' diapers.",
      summary: "Changing a patient's diaper helps maintain personal hygiene and prevents moisture buildup and skin irritation. It must be done carefully while respecting the patient's privacy and safety.",
      importance: "Helps prevent pressure injuries, diaper rash, and infections.\nKeeps patients clean, dry, and comfortable throughout the day.\nPromotes teamwork. Working together can make the task more efficient and reduce physical strain, such as during morning and afternoon diaper changes.",
      procedure: "1. Preparation Before Changing a Diaper\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare a clean diaper, cleaning supplies, and a bag for disposing of the used diaper.\n- Check that all necessary supplies are ready before entering the patient's room.\n- Close the curtain to protect the patient's privacy.\n- Politely explain to the patient that you will change their diaper and clean the area, and describe the procedure before starting.\n2. Turning the Patient and Changing the Diaper\n- Help turn the patient gently from side to side, coordinating with a care worker (ヘルパーさん) or nurse.\n- Carefully remove the used diaper and clean any soiled areas.\n- Clean the area according to the care procedure, wiping from front to back.\n- Put on a clean diaper, ensuring that it is positioned correctly and is not too tight.\n3. Final Checks After Changing the Diaper\n- Straighten the patient's clothing and blanket, and make sure the patient is lying comfortably.\n- Dispose of the used diaper and cleaning materials in the designated waste bin.\n- If you notice redness, wounds, or other skin abnormalities, inform a nurse or care worker (ヘルパーさん).\n- After finishing care for each patient, remove and discard your gloves and put on a new pair before changing another patient's diaper."
    },
    jp: {
      meaning: "患者さんのオムツ交換",
      summary: "患者さんのオムツ交換は、身体を清潔に保ち、湿気による皮膚のふやけや刺激を防ぐためのケアです。患者さんのプライバシーと安全に配慮しながら、丁寧に行います。",
      importance: "褥瘡（床ずれ）、オムツかぶれ、感染の予防につながります。\n患者さんの身体を清潔で乾燥した快適な状態に保ちます。\nチームで協力することで、作業を効率よく進め、身体的な負担を減らします。例えば、午前と午後のオムツ交換などがあります。",
      procedure: "1. オムツ交換前の準備\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 新しいオムツ、清拭用品、使用済みオムツを入れる袋を準備します。\n- 患者さんの部屋に入る前に、必要な物品がそろっていることを確認します。\n- 患者さんのプライバシーを守るため、カーテンを閉めます。\n- オムツ交換と清拭を行うことを丁寧に説明し、開始前に手順を伝えます。\n2. 体位変換とオムツ交換\n- ヘルパーさんや看護師と連携し、患者さんの身体を左右にゆっくりと向けます。\n- 使用済みのオムツを丁寧に外し、汚れた部分をきれいにします。\n- 汚染を防ぐため、前から後ろに向かって拭きます。\n- 新しいオムツを正しい位置に当て、きつく締めすぎないように整えます。\n3. オムツ交換後の確認\n- 患者さんの衣服や掛け布団を整え、楽な姿勢で横になっていることを確認します。\n- 使用済みのオムツと清拭用品は、指定されたごみ箱に廃棄します。\n- 皮膚の赤み、傷、その他の異常を見つけた場合は、看護師またはヘルパーさんに報告します。\n- 一人の患者さんのケアが終わったら、使用した手袋を外して廃棄し、別の患者さんのオムツ交換を行う前に新しい手袋を着けます。"
    }
  },
  {
    id: 12,
    titleJP: "清潔ケア",
    image: "images/image3.jpg",
    th: {
      meaning: "การดูแลความสะอาดร่างกายให้ผู้ป่วย",
      summary: "การดูแลความสะอาดร่างกายให้ผู้ป่วย เป็นกิจวัตรสำคัญที่ช่วยรักษาสุขอนามัย ป้องกันโรคผิวหนัง และช่วยให้ผู้ป่วยรู้สึกสดชื่นและสบายตัว",
      importance: "เพื่อกำจัดเหงื่อ คราบสกปรก และสิ่งขับถ่ายที่ตกค้างบนร่างกาย\nเพื่อรักษาความสะอาดและสุขอนามัยของผู้ป่วย\nเพื่อช่วยลดความเสี่ยงต่อการระคายเคืองและปัญหาผิวหนัง\nเพื่อให้ผู้ป่วยรู้สึกสะอาดและสบายตัว",
      procedure: "1. การเตรียมตัวและอุปกรณ์\n- ล้างมือให้สะอาด สวมผ้ากันเปื้อนและสวมถุงมือก่อนเริ่มปฏิบัติงาน\n- เตรียมน้ำอุ่น ผ้าสะอาด ครีมทำความสะอาด และเสื้อผ้าสำหรับเปลี่ยน\n- ตรวจสอบอุณหภูมิของน้ำให้เหมาะสมก่อนใช้กับผู้ป่วย\n- ปิดม่านเพื่อรักษาความเป็นส่วนตัว\n- แจ้งผู้ป่วยก่อนว่าจะเช็ดทำความสะอาดร่างกายหรือบริเวณใด และจะเปลี่ยนเสื้อผ้าหรือผ้าอ้อมหากจำเป็น\n2. การเช็ดทำความสะอาดร่างกาย\n- ใช้ผ้าสะอาดชุบน้ำอุ่นร่วมกับครีมทำความสะอาดตามขั้นตอน\n- เช็ดร่างกายอย่างอ่อนโยน โดยเริ่มจากบริเวณที่สะอาดไปยังบริเวณที่สกปรก\n- หากทำความสะอาดบริเวณอวัยวะขับถ่าย ให้เช็ดจากด้านหน้าไปด้านหลัง เพื่อลดการปนเปื้อน\n- เปลี่ยนส่วนของผ้าหรือใช้ผ้าสะอาดเมื่อเปลี่ยนไปทำความสะอาดบริเวณอื่น\n- เช็ดคราบครีมและสิ่งสกปรกออกให้สะอาด โดยไม่ถูผิวหนังแรงเกินไป\n3. การเช็ดให้แห้งและเปลี่ยนเสื้อผ้า\n- ใช้ผ้าสะอาดซับผิวหนังให้แห้ง โดยเฉพาะบริเวณข้อพับและบริเวณที่อับชื้น\n- จัดเสื้อผ้าและผ้าห่มให้เรียบร้อย พร้อมจัดท่านอนให้สบาย\n- เก็บอุปกรณ์และทิ้งขยะ\n- ถอดถุงมือและผ้ากันเปื้อน แล้วล้างมือให้สะอาด"
    },
    en: {
      meaning: "Providing personal hygiene care to patients.",
      summary: "Personal hygiene care is an important daily activity that maintains cleanliness, helps prevent skin problems, and helps patients feel refreshed and comfortable.",
      importance: "Removes sweat, dirt, and bodily waste from the skin.\nMaintains patients' cleanliness and personal hygiene.\nHelps reduce the risk of skin irritation and other skin problems.\nHelps patients feel clean and comfortable.",
      procedure: "1. Preparation and Equipment\n- Wash your hands thoroughly, put on an apron, and wear gloves before starting work.\n- Prepare warm water, clean cloths, cleansing cream, and clean clothes for changing.\n- Check that the water temperature is suitable before using it on the patient.\n- Close the curtain to protect the patient's privacy.\n- Explain to the patient which parts of the body you will clean and whether you may need to change their clothes or diaper.\n2. Cleaning the Body\n- Use a clean cloth with warm water and cleansing cream, following the care procedure.\n- Gently wipe the body, starting with cleaner areas and moving toward dirtier areas.\n- When cleaning around the genital or toileting area, wipe from front to back to reduce contamination.\n- Use a clean section of the cloth or a fresh cloth when moving to another area of the body.\n- Remove cleansing cream and dirt thoroughly without rubbing the skin too hard.\n3. Drying the Skin and Changing Clothes\n- Pat the skin dry with a clean towel, especially in skin folds and areas prone to moisture.\n- Straighten the patient's clothes and blanket, and ensure that the patient is lying comfortably.\n- Put away the equipment and dispose of waste appropriately.\n- Remove your gloves and apron, then wash your hands thoroughly."
    },
    jp: {
      meaning: "患者さんの身体を清潔に保つためのケア",
      summary: "清潔ケアは、患者さんの衛生状態を保ち、皮膚トラブルを予防し、さっぱりと快適に過ごせるようにするための重要な日常業務です。",
      importance: "身体に付着した汗、汚れ、排泄物などを取り除きます。\n患者さんの清潔と衛生状態を保ちます。\n皮膚への刺激や皮膚トラブルのリスクを減らします。\n患者さんが清潔で快適に過ごせるようにします。",
      procedure: "1. 準備と物品の確認\n- 作業を始める前に、手をきれいに洗い、エプロンを着用し、手袋を着けます。\n- 温かいお湯、清潔なタオル、清拭用クリーム、着替えを準備します。\n- 患者さんに使用する前に、お湯の温度が適切であることを確認します。\n- 患者さんのプライバシーを守るため、カーテンを閉めます。\n- 身体のどの部分を清拭するか、必要に応じて衣服やオムツを交換することを、開始前に患者さんに説明します。\n2. 身体の清拭\n- 手順に従い、温かいお湯と清拭用クリームを使って、清潔なタオルで身体を拭きます。\n- 皮膚を傷つけないように優しく拭き、比較的清潔な部分から汚れの多い部分へと進めます。\n- 陰部などを清拭するときは、汚染を防ぐため、前から後ろに向かって拭きます。\n- 身体の別の部分を清拭するときは、タオルの清潔な面を使うか、新しい清潔なタオルに交換します。\n- 皮膚を強くこすらず、クリームや汚れが残らないように丁寧に拭き取ります。\n3. 乾燥と着替え\n- 清潔なタオルで皮膚を押さえるようにして水分を拭き取ります。特に、皮膚のしわや湿気がこもりやすい部分を十分に乾かします。\n- 患者さんの衣服や掛け布団を整え、楽な姿勢で横になっていることを確認します。\n- 使用した器具を片付け、ごみを適切に処分します。\n- 手袋とエプロンを外し、手をきれいに洗います。"
    }
  }
];

// ===== LABEL MAPS =====
const LABELS = {
  th: {
    version: "ฉบับภาษาไทย",
    headerTitle: "คู่มือปฏิบัติงาน",
    meaning: "ความหมาย",
    summary: "บทย่อ",
    importance: "ความสำคัญ",
    procedure: "วิธีการปฏิบัติ",
    meaningIcon: "📖",
    summaryIcon: "📋",
    importanceIcon: "⚡",
    procedureIcon: "📝"
  },
  en: {
    version: "English Version",
    headerTitle: "Practical Guide",
    meaning: "Meaning",
    summary: "Summary",
    importance: "Importance",
    procedure: "Procedure",
    meaningIcon: "📖",
    summaryIcon: "📋",
    importanceIcon: "⚡",
    procedureIcon: "📝"
  },
  jp: {
    version: "日本語版",
    headerTitle: "実務ガイド",
    meaning: "意味",
    summary: "概要",
    importance: "重要性",
    procedure: "実施方法",
    meaningIcon: "📖",
    summaryIcon: "📋",
    importanceIcon: "⚡",
    procedureIcon: "📝"
  }
};

// ===== STATE =====
let currentLang = 'th';
let currentTopicId = null;
let previousPage = 'page-home';
let favorites = JSON.parse(localStorage.getItem('careGuide_favorites') || '[]');

// ===== NAVIGATION =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  previousPage = 'page-home';
  showPage('page-home');
}

function showTopicList(lang) {
  currentLang = lang;
  previousPage = 'page-home';
  const label = LABELS[lang];
  document.getElementById('topic-list-title').textContent = label.headerTitle;
  document.getElementById('topic-list-badge').textContent = label.version;

  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';
  TOPICS.forEach((topic, i) => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.onclick = () => showDetail(topic.id, lang);
    card.innerHTML = `
      <div class="topic-num">${i + 1}</div>
      <div class="topic-info">
        <div class="topic-title-jp">${topic.titleJP}</div>
        <div class="topic-title-sub">${topic[lang].meaning}</div>
      </div>
      <div class="topic-arrow">›</div>
    `;
    grid.appendChild(card);
  });

  showPage('page-topic-list');
}

function showDetail(topicId, lang) {
  currentTopicId = topicId;
  currentLang = lang;
  previousPage = 'page-topic-list';

  const topic = TOPICS.find(t => t.id === topicId);
  const data = topic[lang];
  const label = LABELS[lang];

  document.getElementById('detail-title').textContent = topic.titleJP;
  document.getElementById('detail-back-btn').onclick = () => showTopicList(lang);

  // Update favorite button
  updateFavButton();

  const container = document.getElementById('detail-content');
  container.innerHTML = `
    <img src="${topic.image}" alt="${topic.titleJP}" class="detail-image" onerror="this.style.display='none'">
    <div class="detail-section">
      <div class="detail-section-title"><span class="icon">${label.meaningIcon}</span> ${label.meaning}</div>
      <div class="detail-text">${data.meaning}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title"><span class="icon">${label.summaryIcon}</span> ${label.summary}</div>
      <div class="detail-text">${data.summary}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title"><span class="icon">${label.importanceIcon}</span> ${label.importance}</div>
      <div class="detail-text">${data.importance}</div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title"><span class="icon">${label.procedureIcon}</span> ${label.procedure}</div>
      <div class="detail-text">${data.procedure}</div>
    </div>
  `;

  showPage('page-detail');
}

// ===== FAVORITES =====
function getFavKey() {
  return `${currentLang}_${currentTopicId}`;
}

function isFavorited(lang, topicId) {
  return favorites.includes(`${lang}_${topicId}`);
}

function updateFavButton() {
  const btn = document.getElementById('detail-fav-btn');
  if (isFavorited(currentLang, currentTopicId)) {
    btn.textContent = '★';
    btn.classList.add('active');
  } else {
    btn.textContent = '☆';
    btn.classList.remove('active');
  }
}

function toggleFavorite() {
  const key = getFavKey();
  const idx = favorites.indexOf(key);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(key);
  }
  localStorage.setItem('careGuide_favorites', JSON.stringify(favorites));
  updateFavButton();
}

function showFavorites() {
  const container = document.getElementById('fav-list');
  container.innerHTML = '';

  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="fav-empty">
        <div class="icon">⭐</div>
        <p>ยังไม่มีรายการโปรด<br>No favorites yet<br>お気に入りはまだありません</p>
      </div>
    `;
  } else {
    const langNames = { th: '🇹🇭 ไทย', en: '🇬🇧 EN', jp: '🇯🇵 日本語' };
    favorites.forEach(key => {
      const [lang, idStr] = key.split('_');
      const topicId = parseInt(idStr);
      const topic = TOPICS.find(t => t.id === topicId);
      if (!topic) return;

      const item = document.createElement('div');
      item.className = 'fav-item';
      item.innerHTML = `
        <span class="lang-tag">${langNames[lang]}</span>
        <span class="fav-title">${topic.titleJP} — ${topic[lang].meaning}</span>
        <button class="remove-fav" onclick="event.stopPropagation(); removeFav('${key}')">✕</button>
      `;
      item.onclick = () => {
        currentLang = lang;
        showDetail(topicId, lang);
      };
      container.appendChild(item);
    });
  }

  showPage('page-favorites');
}

function removeFav(key) {
  const idx = favorites.indexOf(key);
  if (idx > -1) {
    favorites.splice(idx, 1);
    localStorage.setItem('careGuide_favorites', JSON.stringify(favorites));
    showFavorites();
  }
}

function goBackFromFav() {
  goHome();
}
