import UrlParse from '../../routes/url.parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
                 <div id="movie" class="movie"></div>
             `;
  },

  async afterRender() {
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovies(url.id);
    const moviesContainer = document.querySelector('#movie');
    moviesContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;
