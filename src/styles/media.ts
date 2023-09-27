import { css } from 'styled-components';

const media = {
	tablet: (style: TemplateStringsArray | string) => css`@media (min-width: 700px) {
		${style};
	}`,
	desktop: (style: TemplateStringsArray | string) => css`@media (min-width: 1200px) {
		${style};
	}`,
};

export default media;
