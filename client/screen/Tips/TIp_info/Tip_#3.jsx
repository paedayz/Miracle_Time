import React from 'react';
import { SafeAreaView, Text, View, StyleSheet,ScrollView  } from 'react-native';

export default function Tip_3_Screen({navigation}) {
    return (
        <SafeAreaView style={styles.box}>
        <ScrollView>

            <Text style={styles.toppic}>ทำไม “ทัศนคติ” ถึงมีความสำคัญมากกว่า “ความฉลาดทางปัญญา (IQ)” ?</Text>
            <Text style={styles.content}>   เมื่อพูดถึงความสำเร็จ เรามักจะคิดว่าคนที่มีสติปัญญาดีจะต้องทิ้งห่างคนอื่นไปแบบไม่เห็นฝุ่นเสมอ แต่คุณจะเปลี่ยนวิธีคิดนี้ไปอย่างสิ้นเชิง เมื่อได้อ่านงานวิจัยชิ้นใหม่จากมหาวิทยาลัยแสตนฟอร์ด
Carol Dweck เป็นนักจิตวิทยาที่ได้ทุ่มเทชีวิตการงานของเธอเพื่อศึกษาเรื่องทัศนคติและศักยภาพ ซึ่งงานวิจัยล่าสุดของเธอนั้นแสดงให้เห็นว่า “ทัศนคติบ่งบอกถึงความสำเร็จได้มากกว่าระดับไอคิว” เธอพบว่าทัศนคติที่เป็นแกนหลักของคนเราแบ่งเป็นสองประเภท หนึ่งคือ กรอบความคิดแบบจำกัด (Fixed Mindset) สองคือ กรอบความคิดแบบเติบโต (Growth Mindset)
คนที่มี กรอบความคิดแบบจำกัด (Fixed Mindset) จะเป็นคนที่ยึดมั่นในความคิดตนเองและไม่ยอมเปลี่ยนแปลงตนเองเพื่อสิ่งใดๆ ซึ่งการมีวิธีคิดแบบนี้เอง ที่อาจเป็นปัญหาได้เวลาที่พบเจอกับสิ่งที่ตัวเองไม่สามารถรับมือได้ และมันจะทำให้รู้สึกสิ้นหวังและพ่ายแพ้ได้
ส่วนคนที่มี กรอบความคิดแบบเติบโต (Growth Mindset) จะเป็นคนที่มักเชื่อว่าคนเรานั้นสามารถพัฒนาตัวเองได้เสมอ ตราบใดที่เรามีความพยายาม และวิธีคิดแบบนี้เองที่จะทำให้เกิดความก้าวหน้ายิ่งกว่าคนที่มีกรอบความคิดแบบตายตัว แม้ว่าจะมีไอคิวที่ไม่สูงก็ตาม เพราะคนประเภทนี้จะชอบสิ่งที่ท้าทาย และมองว่าสิ่งต่างๆ ที่เข้ามาคือโอกาสในการเรียนรู้ในสิ่งใหม่ๆ

โดยทั่วไปแล้ว การมีความสามารถหรือเป็นคนฉลาดจะทำให้มีความมั่นใจมากกว่าคนอื่นๆ ซึ่งเป็นความจริงเวลาพบเจอกับเรื่องง่ายๆ เท่านั้น แต่ปัจจัยที่สำคัญกว่านั้นก็คือ วิธีการจัดการกับความผิดพลาดและอุปสรรคต่างๆ ต่างหาก  โดยคนมีกรอบความคิดแบบเติบโตจะอ้าแขนรับกับอุปสรรคได้อย่างไม่ลังเล
Dweck กล่าวว่าความสำเร็จในชีวิต คือเรื่องของวิธีการจัดการกับความล้มเหลวในชีวิตของคุณนี่แหละ โดยเธอได้อธิบายวิธีที่คนมีกรอบความคิดแบบเติบโตไว้ว่า
            </Text>
            <Text style={styles.phrase}>“ความล้มเหลวก็เป็นแค่ข้อมูลตัวหนึ่ง ที่เราแปะป้ายเอาไว้ว่ามันคือความล้มเหลว ซึ่งมันทำให้เรารู้ว่า หากวิธีนี้มันไม่ได้ผล งั้นฉันก็จะลองแก้ปัญหาด้วยวิธีอื่นดู”</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" คมอยู่นะเนี่ย รู้สึกเลือดไหลซิบๆเลย "</Text>
            <Text style={styles.content}>ไม่ว่าคุณจะเป็นประเภทไหนก็ตาม คุณสามารถเปลี่ยนแปลงและพัฒนาตัวเองให้มีกรอบความคิดแบบเติบโตได้ทั้งนั้น และเรามีวิธีที่จะช่วยปรับมุมมองของคุณให้ดีขึ้นด้วยวิธีดังต่อไปนี้!</Text>
            <Text></Text>
            
            <Text style={styles.h1}>อย่าจมอยู่กับความรู้สึกว่าตัวเองนั้นไร้ค่า</Text>
            <Text style={styles.content}>   ใครๆ ก็ต้องเคยมีช่วงเวลาที่รู้สึกว่าตัวเองนั้นไร้ค่าสิ้นดี ซึ่งบททดสอบของคุณก็คือ คุณจะมีปฏิกิริยาตอบรับกับความรู้สึกแบบนี้อย่างไร? คุณจะเลือกเรียนรู้เป็นบทเรียนและก้าวต่อไป หรือจะปล่อยให้ตัวเองจมดิ่งลึกลงไปเรื่อยๆ  มีผู้คนที่ประสบความสำเร็จมากมาย ที่ไม่อาจมาถึงจุดๆ นี้ได้ ถ้าหากพวกเขาพ่ายแพ้ให้กับความรู้สึกที่ไร้ค่า ยกตัวอย่างเช่นบุคคลเหล่านี้
•	วอลต์ ดิสนีย์ ที่เคยถูกไล่ออกจากบริษัท Kansas City Star เพราะ “ไร้ความคิดสร้างสรรค์และไอเดียดีๆ”
•	โอปราห์  วินฟรีย์ ก็เคยถูกไล่ออกจากการเป็นผู้ประกาศข่าวทางโทรทัศน์ในบัลติมอร์ เพราะว่าเธอ “อ่อนไหวกับเรื่องส่วนตัวมากเกินไป”
•	เฮนรี่ ฟอร์ด เคยล้มเหลวจากการสร้างบริษัทรถมาแล้วถึงสองครั้งก่อนจะประสบความสำเร็จจากบริษัทฟอร์ด
•	สตีเวน สปีลเบิร์ก เคยถูกปฏิเสธจาก USC’s Cinematic Arts School มาหลายต่อหลายครั้งเช่นกัน
ลองจินตนาการดูว่าถ้าพวกเขาเหล่านี้มีกรอบความคิดแบบจำกัด ก็คงยอมแพ้และเลิกล้มความหวังไปแล้ว คนที่มีมีกรอบความคิดแบบเติบโตจะไม่รู้สึกไร้ค่า เพราะรู้ว่าการจะประสบความสำเร็จได้ คุณต้องเต็มใจที่ล้มเหลวและลุกขึ้นใหม่ได้อีกครั้ง
</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" เข้าใจแล้วสินะ เจ้ามนุษย์ "</Text>
            <Text></Text>
            <Text style={styles.h1}>มีความมุ่งมั่นและหลงใหลในสิ่งที่ทำ</Text>
            <Text style={styles.content}>   แน่นอนว่าในโลกนี้ มีคนที่มีพรสวรรค์และเก่งมากกว่าคุณเสมอ  แต่คุณสามารถใช้ความมุ่งมั่นและหลงใหลในสิ่งที่คุณทำมาทดแทนพรสวรรค์ที่ขาดหายไปได้ นั่นเป็นสิ่งที่ผลักดันให้คนเราไม่หยุดที่จะพัฒนาตนเอง ยกอย่างเช่น วอร์เรน บัฟเฟตต์ เขาแนะนำว่าให้หาสิ่งที่รักและหลงใหลจริงๆ ด้วยเทคนิคที่เขาเรียกว่า 5/25 โดยให้เขียนสิ่งที่คุณสนใจมากที่สุด 25 อย่าง แล้วก็ตัดออก 20 ข้อ และ 5 ข้อสุดท้ายที่เหลือนั่นแหละ ก็คือสิ่งที่คุณรักมากที่สุดจริงๆ</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" อันนี้น่าสนใจ ลองเอาไปใช้ดูได้นะ มนุษย์ "</Text>
            <Text></Text>
            <Text style={styles.h1}>ลงมือทำ</Text>
            <Text style={styles.content}>   ผู้คนที่มีกรอบความคิดแบบเติบโตไม่ได้เอาชนะความกลัวได้เพราะพวกเขากล้าหาญกว่าคนอื่น แต่เป็นเพราะพวกเขารู้ว่าความกลัวเป็นอารมณ์ที่ทำให้หมดกำลังใจ ซึ่งทางออกที่ดีที่สุดก็คือ การลงมือทำ กรอบความคิดแบบเติบโตทำให้พวกเขามีพลังใจและรู้ว่าคนเราไม่สามารถรอเวลาที่เหมาะสมเพื่อจะก้าวไปข้างหน้าได้หรอก เพราะฉะนั้น การลงมือทำอย่างจริงจังนี่แหละ ที่จะเปลี่ยนความกังวลต่อความล้มเหลวให้กลายเป็นพลังเชิงบวกได้</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" ก็อย่างที่ว่า Just Do It ยังไงละ 55555 "</Text>
            <Text></Text>
            <Text style={styles.h1}>ก้าวไปให้ไกลกว่าจุดที่เคยก้าวมา</Text>
            <Text style={styles.content}>   คนที่เต็มเปี่ยมไปด้วยกำลังใจ จะไม่ลังเลที่จะทุ่มเทให้กับสิ่งที่ทำ พวกเขาจะผลักดันตัวเองไปให้ไกลกว่าจุดเดิมเสมอ มีเรื่องเล่าเรื่องหนึ่งของ บรูซ ลี กล่าวว่า บรูซมีลูกศิษย์คนหนึ่งที่วิ่งเป็นระยะ 3 ไมล์กับเขาทุกวัน ในวันหนึ่งตอนที่วิ่งใกล้ครบสามไมล์ บรูซก็พูดขึ้นว่า “วิ่งต่ออีกสองไมล์เถอะ!” แต่ด้วยความเหน็ดเหนื่อย ลูกศิษย์ของเขาจึงตอบไปว่า “ถ้าวิ่งต่ออีกสองไมล์ ผมต้องตายแน่ๆ” รู้ไหมว่าบรูซตอบว่ายังไง? “งั้นก็วิ่งซะสิ!”  หลังจากวิ่งครบห้าไมล์แล้ว ลูกศิษย์ของเขาก็ทั้งล้าและโกรธมาก บรูซจึงอธิบายให้เขาฟังว่า
“ต่อให้คุณไม่วิ่งต่ออีกสองไมล์ คุณก็อาจต้องตายอยู่ดี ถ้าเอาแต่สร้างขีดจำกัดให้ตัวเอง ทั้งชีวิตนี้ไม่ว่าเรื่องอะไร คุณก็จะมีแต่ขีดจำกัดให้ตัวเองเต็มไปหมด ขีดจำกัดที่แท้จริงน่ะไม่มีหรอก มีก็แต่อุปสรรคที่คุณต้องก้าวข้ามมันไปให้ได้แม้ว่ามันจะฆ่าคุณก็ตาม เพราะคนเราต้องพัฒนาตัวเองอยู่เสมอ”
ถ้าคุณไม่พัฒนาตัวเองขึ้นวันละนิดละหน่อย อาจกลายเป็นว่าคุณจะแย่ลงเรื่อยๆ แทนก็ได้ คุณเองก็ไม่อยากเป็นแบบนั้นหรอกใช่ไหมล่ะ?
</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" ไม่มีใครมาจำกัดเราได้ นอกจากตัวเราเอง  (อาจเพราะ ชาบู ได้ในบ้างครั้ง) "</Text>
            <Text></Text>
            <Text style={styles.h1}>คาดหวังผลลัพธ์</Text>
            <Text style={styles.content}>   ผู้คนที่มีกรอบความคิดแบบเติบโตมักจะรู้ว่า พวกเขาจะต้องล้มเหลวอยู่เรื่อยๆ แต่พวกเขาไม่เคยหยุดคาดหวังถึงแม้จะรู้อย่างนั้นก็ตาม การตั้งความหวังกับผลลัพธ์เป็นตัวกระตุ้นให้คุณมีพลังที่จะก้าวเดินต่อไปได้ ลองคิดดูสิว่า…ถ้าหากคุณไม่ตั้งความหวังว่าตัวเองจะต้องประสบความสำเร็จ คุณก็คงไม่พยายามมาถึงจุดนี้หรอก จริงไหม?</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" ส่วนฉันนะ คาดหวัง(อาหาร) จากเธออยู่นะ 5555"</Text>
            <Text></Text>
            <Text style={styles.h1}>ปรับตัวกับปัญหา</Text>
            <Text style={styles.content}>   ไม่มีใครที่ไม่ต้องพบเจอกับความยากลำบาก ผู้คนที่มีกรอบความคิดแบบเติบโตจะใช้ความลำบากในการพัฒนาตัวเอง ไม่ใช่เพื่อดึงให้ถอยหลังลงคลอง เมื่อถูกท้าทายด้วยเหตุการณ์ไม่คาดคิด พวกเขาจะปรับตัวเข้ากับมันจนกว่าจะผ่านพ้นไปได้</Text>
            <Text></Text>
            <Text style={styles.h1}>อย่าบ่นเวลาไม่ได้ดั่งใจ</Text>
            <Text style={styles.content}>   การบ่นเป็นสัญลักษณ์ของคนที่มีกรอบความคิดแบบจำกัดแบบชัดเจน คนที่มีกรอบความคิดแบบเติบโตจะมองหาทุกโอกาสที่เป็นไปได้เสมอ จึงไม่มีพื้นที่พอสำหรับการบ่น</Text>
            <Text style={styles.pet}>สัตว์เลี้ยง:" ใช่ๆเลิกบ่น แล้วน้ำหมูปิ้งมาถวายฉันด้วย 5555 "</Text>
            <Text></Text>
            
            <Text style={styles.content}>   สรุปวิธีพัฒนาความคิดทั้ง 7 ข้อข้างต้น: การหมั่นเอาใจใส่กับวิธีคิดของตัวเองต่อสิ่งเล็กๆ น้อยๆ รอบตัว จะทำให้คุณค่อยๆ พัฒนาวิธีคิดของตัวเองให้ดีขึ้นได้ จนกลายเป็นคนที่มีกรอบความคิดแบบเติบโตได้นั่นเอง</Text>
            
            <Text></Text>
            
            <View style={styles.creditBox}>
                <Text style={styles.credit}>Credit: https://sumrej.com/why-attitude-is-more-important-than-iq/</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    toppic: {
        fontSize: 24,
        fontWeight:'bold', 
    },
    box: {
        backgroundColor: 'white',
        margin: 2,
        maxWidth: '97%',
        alignSelf: 'center',
        padding: 12,
    },
    content: {
        fontSize: 14,
        color: 'gray',
        padding: 8,
    },
    h1: {
        fontSize: 18,
        fontWeight:'bold',           
    },
    creditBox:{
        
    },
    credit: {
        fontSize: 14,
        color: 'blue',  
    },
    pet: {
        fontSize: 14,
        color: 'green',
        paddingLeft:8,
    },
    phrase:{
        fontSize: 18,
        fontWeight:'bold',
        color: 'darkorange',
    }
  });