import './styles.css';
import { NextDaysItem , NextDaysItemProps} from '../NextDaysItem';

interface NextDaysProps{
  data: NextDaysItemProps[];
}

export function NextDays({ data }: NextDaysProps) {
  return (
    <section className='next-days'>
      <h1>Previsão para 5 dias</h1>

      <div className='next-next-detail'>
        {data.map((item) => <NextDaysItem key={item.day} data={item} />)}
      </div>
    </section>
  )
}