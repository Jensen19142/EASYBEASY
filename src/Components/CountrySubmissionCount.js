import React, { useEffect, useState, useRef } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const CountrySubmissionCount = () => {
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('CountrySubmissionCount.tsv')
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split('\n');
        const headers = lines[0].split('\t').map((h) => h.trim());

        const rows = lines.slice(1).map((line, index) => {
          const values = line.split('\t').map((v) => v.trim());
          const entry = {};
          headers.forEach((header, i) => {
            entry[header] = values[i] || '';
          });
          entry.key = index;
          return entry;
        });

        setDataSource(rows);
      })
      .catch((err) => console.error('Failed to fetch TSV:', err));
  }, []);

  // Search logic
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
      ...getColumnSearchProps('Country'),
    },
    {
      title: 'Virus Subtype',
      dataIndex: 'Virus Subtype',
      key: 'Virus Subtype',
      filters: [
        { text: 'A/H1N1', value: 'A/H1N1' },
        { text: 'A/H3N2', value: 'A/H3N2' },
        { text: 'B/Victoria', value: 'B/Victoria' },
        { text: 'B/Yamagata', value: 'B/Yamagata' },
      ],
      onFilter: (value, record) => record['Virus Subtype'] === value,
    },
    {
      title: 'Total Influenza Cases',
      dataIndex: 'Total Influenza Cases',
      key: 'Total Influenza Cases',
    },
    {
      title: 'Number of Cases in Past 4 Weeks',
      dataIndex: 'Number of Cases in Past 4 Weeks',
      key: 'Number of Cases in Past 4 Weeks',
    },
    {
      title: '% of Cases in Past 4 Weeks',
      dataIndex: '% of Cases in Past 4 Weeks',
      key: '% of Cases in Past 4 Weeks',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default CountrySubmissionCount;
