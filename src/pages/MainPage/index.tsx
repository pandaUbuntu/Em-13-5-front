import LinkCard from '../../components/Cards/LinkCard'
import SimpleCard from '../../components/Cards/SimpleCard'
import Section from '../../components/Section'
import PageLayout from '../pageLayout'

const MainPage = () =>{

  return (
        <PageLayout title="Main">
           <Section isWrap={false} title="FOODHACKER - доставка правильного харчування у Черкасах">
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Обрати раціон' desc='Це можна зробити на день, тиждень чи місяць. Доставляємо замовлення у будь-який куточок Черкас у зручний для вас час.' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Смачно поїсти' desc='Ніколи вирватися з роботи на обід? Не біда! Доставимо поживний бізнес-ланч просто в офіс, після чого ваша продуктивність зросте удвічі.' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Замовити будь-яку страву' desc='Наші кухарі приготують для вас смачну та корисну їжу зі свіжих продуктів! Готуємо на замовлення окремі страви, організовуємо святкові бенкети' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Побічні ефекти' desc='Схуднення або набір ваги без стресів і зривів, привабливий зовнішній вигляд, поліпшення самопочуття, більше енергії, економія часу та грошей.' />
           </Section>
           <Section isWrap={true}  title="Програми здорового харчування">
              <LinkCard img="https://placehold.co/80x80/red/red" title='Зниження ваги "FoodHacker for you"' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Збалансоване харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Спортивне харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Вегетаріанське та пісне харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Збалансоване харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Збалансоване харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Збалансоване харчування' link='/' />
              <LinkCard img="https://placehold.co/80x80/red/red" title='Збалансоване харчування' link='/' />
           </Section>

           <Section isWrap={false}  title="Як ми працюємо?">
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Сформуйте замовлення' desc='Це можна зробити на день, тиждень чи місяць. Доставляємо замовлення у будь-який куточок Черкас у зручний для вас час.' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Ми все приготуємо' desc='Ніколи вирватися з роботи на обід? Не біда! Доставимо поживний бізнес-ланч просто в офіс, після чого ваша продуктивність зросте удвічі.' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='І доставимо' desc='Наші кухарі приготують для вас смачну та корисну їжу зі свіжих продуктів! Готуємо на замовлення окремі страви, організовуємо святкові бенкети' />
                <SimpleCard img="https://placehold.co/80x80/orange/orange" title='Побічні ефекти  ' desc='Схуднення або набір ваги без стресів і зривів, привабливий зовнішній вигляд, поліпшення самопочуття, більше енергії, економія часу та грошей.' />
           </Section>
        </PageLayout>
  )
}


export default MainPage
