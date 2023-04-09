import { GetStaticProps } from 'next';
import { RiCalendarLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <section className={commonStyles.container}>
      <div className={styles.post}>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div>
          <span>
            <RiCalendarLine size={20} /> 15 Mar 2021
          </span>
          <span>
            <FiUser size={20} /> Joseph Oliveira
          </span>
        </div>
      </div>

      <button type="button" className={styles.postButton}>
        Carregar mais posts
      </button>
    </section>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
