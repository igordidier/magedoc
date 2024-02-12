import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/hero1.svg').default,
    description: (
      <>
SoloMage has been meticulously designed and developed with a singular focus in mind – to make your freelance work seamless and significantly boost your productivity. We've taken painstaking care to create a platform that not only simplifies
your workflow but also offers an array of tools and features aimed at streamlining every aspect of your freelance journey.      </>
    ),
  },
  {
    title: 'Bigger Look',
    Svg: require('@site/static/img/hero2.svg').default,
    description: (
      <>

We have designed this comprehensive documentation page with the intention of providing you with a detailed overview of every
 feature available and to facilitate a clear understanding of how to utilize them effectively. By exploring this resource,
 you will gain a thorough grasp of the various
 functionalities, enabling you to maximize their potential and make the most out of our product.
      </>
    ),
  },
  {
    title: 'Contact Us',
    Svg: require('@site/static/img/hero3.svg').default,
    description: (
      <>

Discovering every feature is made easy with our Doc interface.
Don't hesitate to reach out to us for further enhancements and advanced features that can take your experience to the next level.
 Your satisfaction is our priority,
 and we're here to help you get the most out of our product.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
