import { FC } from 'react'
import Typography from '../../../../components/Typography'
import { t } from '@lingui/macro'
import ListPanel from '../../../../components/ListPanel'
import { useLingui } from '@lingui/react'
import { useRecoilValue } from 'recoil'
import { poolAtom } from './context/atoms'

const ClassicMarket: FC = () => {
  const { i18n } = useLingui()
  const [, pool] = useRecoilValue(poolAtom)

  return (
    <div className="flex flex-col gap-5 px-5 mt-12">
      <Typography variant="h3" className="text-high-emphesis" weight={700}>
        {i18n._(t`Market Information`)}
      </Typography>
      <ListPanel
        header={<ListPanel.Header title={i18n._(t`Assets`)} value="$356,227,073.45" subValue="1,837,294.56 SLP" />}
        items={[pool?.reserve0, pool?.reserve1].map((amount, index) => (
          <ListPanel.CurrencyAmountItem amount={amount} key={index} />
        ))}
      />
    </div>
  )
}

export default ClassicMarket