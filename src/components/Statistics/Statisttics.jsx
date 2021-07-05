import PropTypes from "prop-types";
import style from './Statisttics.module.css';

 function Statistics({ title, stats }) {
   return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {stats.map((stat) => (
          <li className={style.item} key={stat.id}
            style={{ backgroundColor: stat.color }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;