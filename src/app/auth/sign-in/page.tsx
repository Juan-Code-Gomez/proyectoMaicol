import Image from 'next/image';
import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { metaObject } from '@/config/site.config';
import imageClient from '../../../../public/neuroImagePrincipal.jpg'

// export const metadata = {
//   ...metaObject('Sign In 1'),
// };

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
        Bienvenido de nuevo! Por favor{' '}
          <span className="relative inline-block">
            Ingrese
          </span>{' '}
          Para continuar.
        </>
      }
      description=""
      bannerTitle=""
      bannerDescription=""
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              imageClient
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}