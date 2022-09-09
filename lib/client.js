import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


//to connect with sanity fall
export const client = sanityClient({
projectId:'eqfmrvtz',
dataset:'production',
apiVersion:'2022-09-05',
useCdn: true,
token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//to connect with image url

const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);