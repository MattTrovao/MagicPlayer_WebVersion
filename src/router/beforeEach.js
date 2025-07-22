import i18n from '../i18n';


export default async (to) => {
  const { t } = i18n.global;

  document.title = `${t(to.meta.title)} - MagicPlayer`;

  return true;
};
