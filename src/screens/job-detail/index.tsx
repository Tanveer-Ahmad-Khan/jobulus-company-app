import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';

import { data } from '@/constants/applicant-list';
import { Text, View } from '@/ui';

import ApplicantList from '../applicants/applicants-list';
import Footer from './footer';
import OverviewJob from './overview-job';
import VacanciesStatus from './vacancy-status';
const JobDetail = () => {
  const renderItem = ({ item }: any) => (
    <View>
      <ApplicantList
        title={item.title}
        detail={item.detail}
        address={item.address}
        status={item.status}
        time={item.time}
        color={item.color}
      />
    </View>
  );
  return (
    <View>
      <ScrollView>
        <OverviewJob />
        <VacanciesStatus />
        <View
          flexDirection={'row'}
          justifyContent={'space-between'}
          paddingHorizontal={'2xl'}
          alignItems={'center'}
          height={scale(40)}
        >
          <View flexDirection={'column'}>
            <Text>High Matches</Text>
          </View>
          <View
            flexDirection={'column'}
            borderBottomWidth={1}
            borderColor={'primary'}
          >
            <Text color={'primary'}>View All</Text>
          </View>
        </View>
        <View flexDirection={'row'}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default JobDetail;
