import Head from "next/head";

const HeadSeo = ({ title, description, keywords, author, image, url }) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title || 'Why Not - Магазин кроссовок'}</title>
            <meta
                name="description"
                content={
                    description ||
                    'Откройте для себя новую коллекцию кроссовок в Why Not. Премиальное качество, лучшие бренды и эксклюзивные модели уже в наличии.'
                }
            />
            <meta
                name="keywords"
                content={
                    keywords ||
                    'кроссовки, премиальные кроссовки, лучшие бренды, стильные кроссовки, коллекция кроссовок, обувь, Nike, Adidas, Jordan, магазин Why Not'
                }
            />
            <meta name="author" content={author || 'Команда Why Not (Abbos, Bobur, Akmal)'} />
            <link rel="icon" type="image/png" href="/favicon.png" />

            <meta property="og:title" content={title || 'Why Not - Магазин кроссовок'} />
            <meta
                property="og:description"
                content={
                    description ||
                    'Откройте для себя новую коллекцию кроссовок в Why Not. Премиальное качество, лучшие бренды и эксклюзивные модели уже в наличии.'
                }
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || 'https://github.com/Abbos29'} />
            <meta property="og:image" content={image || '/header-logo.svg'} />

            <meta name="twitter:card" content="/header-logo.svg" />
            <meta name="twitter:title" content={title || 'Why Not - Магазин кроссовок'} />
            <meta
                name="twitter:description"
                content={
                    description ||
                    'Откройте для себя новую коллекцию кроссовок в Why Not. Премиальное качество, лучшие бренды и эксклюзивные модели уже в наличии.'
                }
            />
            <meta name="twitter:image" content={image || '/header-logo.svg'} />

            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#000000" />
        </Head>
    );
};

export default HeadSeo;
