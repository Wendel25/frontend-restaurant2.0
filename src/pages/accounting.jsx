import { Helmet } from 'react-helmet-async';

import { AccountingView } from 'src/sections/accounting';

// ----------------------------------------------------------------------

export default function AccountingPage() {
  return (
    <>
      <Helmet>
        <title> Contabilidade | CoddeWaves </title>
      </Helmet>

      <AccountingView />
    </>
  );
}
