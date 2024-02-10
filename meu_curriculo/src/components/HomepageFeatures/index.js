import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pensamento Crítico',
    imgPath: require('@site/static/img/pensamento_critico.png').default,
    description: (
      <>
        Tenho habilidade para identificar problemas, propor soluções e argumentar de forma lógica e coerente.
      </>
    ),
  },
  {
    title: 'Trabalho em Equipe',
    imgPath: require('@site/static/img/trabalho_em_equipe.png').default,
    description: (
      <>
        Sou flexível, comunicativo e proativo, buscando sempre o melhor resultado para o grupo.
      </>
    ),
  },
  {
    title: 'Competência e Disciplina',
    imgPath: require('@site/static/img/disciplina.png').default,
    description: (
      <>
        Tenho iniciativa, criatividade e foco nos meus objetivos, buscando superar os desafios que surgem.
      </>
    ),
  },
];

function Feature({imgPath, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgPath} alt={title} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
