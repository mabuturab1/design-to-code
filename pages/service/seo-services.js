import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { Box, Grid, Typography } from '@mui/material';
import {
  BackColoredCont,
  SectionRoot,
  FlexForImgCont,
  LargeRespImage,
} from 'components/custom';
import SubServicesCard from 'components/ourServices/subServiceCard';
import { ContentList, IndustryVertiCard } from 'components/ourServices/styled';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { SeoServices as SeoServ } from 'components/ourServices/services.data';
import ServiceHeader from 'components/ourServices/serviceHeader';

export default function SeoServices() {
  return (
    <React.Fragment>
      <ServiceHeader
        title='Affordable SEO Services'
        description='We offer affordable SEO services to those who need stable keyword
              ranking in the search engine result pages with premium results.
              Our certified SEO professionals do quality research, plan stunning
              strategies and deliver promising results.'
        img='/static/images/seo.webp'
      />
      <BackColoredCont className='sectionGap'>
        <SectionRoot className='dispFlexColAlgnCen'>
          <Typography variant='h3' gutterBottom>
            Why SEO?
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            className='sectionMaxWid'
            sx={{ width: '100%', maxWidth: '42rem' }}
          >
            SEO or search engine optimization is the methodology that is used to
            improve a website’s ranking in the SERPs. It&apos;s a combination of
            activities that are used strategically to increase the ranking of a
            website in a search engine.
          </Typography>
          <FlexForImgCont mt={5} width='100%'>
            <LargeRespImage>
              <Image
                src='/static/images/why-seo.webp'
                layout='responsive'
                width={500}
                height={400}
                alt='Magento Banner'
                className='image'
              />
            </LargeRespImage>
            <Box display='flex' alignItems='center'>
              <ContentList>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    SEO yields 70% of the organic links on SERPs.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    80% of the time, paid advertisements are ignored by the
                    users.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    90%+ of search traffic comes from search engines.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    There are 200+ Google ranking factors that need to be
                    catered via SEO.
                  </Typography>
                </li>
              </ContentList>
            </Box>
          </FlexForImgCont>
        </SectionRoot>
      </BackColoredCont>

      <SectionRoot className={clsx('dispFlexColAlgnCen', 'sectionGap')}>
        <Typography variant='h3' gutterBottom>
          SEO Services Offered
        </Typography>
        <Grid mt={3} container spacing={4}>
          {SeoServ.map((el) => (
            <Grid key={el.title} item xs={12} sm={12} md={6}>
              <SubServicesCard {...el} />
            </Grid>
          ))}
        </Grid>
      </SectionRoot>
      <Box
        className='sectionGap'
        sx={{
          backgroundColor: 'background.neutral',
        }}
      >
        <SectionRoot sx={{ paddingBlock: '4rem' }}>
          <FlexForImgCont gap='1rem'>
            <Box
              display='flex'
              flexDirection='column'
              pr={5}
              justifyContent='space-evenly'
              textAlign={{ xs: 'center', sm: 'center', md: 'start' }}
            >
              <Typography variant='h3' gutterBottom>
                Industry Verticals We Service
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                ConovoTech has lent its expertise to a multitude of industry
                verticals over the past 10 years. In the past decade, we have
                built a strong and versatile clientele that spans 3 continents
                and 15 industry verticals. Our commitment to excellence,
                customer-focused approach, and cutting-edge solutions means that
                our customers keep choosing us again and again.
              </Typography>
            </Box>
            <IndustryVertiCard>
              <li>
                <span>Medical</span>
              </li>
              <li>
                <span>News</span>
              </li>
              <li>
                <span>Marketplace</span>
              </li>
              <li>
                <span>LifeStyle</span>
              </li>
              <li>
                <span>Travel</span>
              </li>
              <li>
                <span>Games</span>
              </li>
              <li>
                <span>Finance</span>
              </li>
              <li>
                <span>Business</span>
              </li>
              <li>
                <span>Weather</span>
              </li>
              <li>
                <span>Music</span>
              </li>
              <li>
                <span>Books</span>
              </li>
              <li>
                <span>Sports</span>
              </li>
            </IndustryVertiCard>
          </FlexForImgCont>
        </SectionRoot>
      </Box>
    </React.Fragment>
  );
}
