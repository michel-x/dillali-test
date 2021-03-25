import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Switch from './components/Switch';
import Menu from './components/Menu';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 900px;
  height: 600px;
  border: 2px solid black;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 70px;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 5px 0 0 5px;
`;

const Logo = styled.div`
  display: flex;
  padding: 20px 80px;
  background-color: #ddd;
  color: #aaa; 
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 30px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 35%;
`;

const StyledMenu = styled(Menu)`
  background-color: ${(props: any) => props.darkBackground ? '#ddd' : 'white'};
`;

const appLabels = [1, 2, 3, 4, 5].map((item) => `Entry${item}`);
const adminLabels = [1, 2, 3].map((item) => `AdminEntry${item}`);

const App = () => {

  const [mode, setMode] = useState<'app' | 'admin'>('app');
  const [activeMenu, setActiveMenu] = useState<string>('');

  const handleClickMenuItem = useCallback((label: string) => setActiveMenu(label), []);

  return (
    <Root>
      <Wrapper>

        <TopSection>
          <LogoContainer>
            <Logo>Logo</Logo>
          </LogoContainer>

          <SwitchContainer>
              <Switch
                id="appMode"
                name="mode"
                value="app"
                checked={mode === 'app'}
                onChange={() => setMode('app')}
              >
                app mode
              </Switch>
              <Switch
                id="adminMode"
                name="mode"
                value="admin"
                checked={mode === 'admin'}
                onChange={() => setMode('admin')}
              >
                admin mode
              </Switch>
            </SwitchContainer>
        </TopSection>

        <BottomSection>
          <StyledMenu 
            labels={mode === 'admin' ? adminLabels : appLabels}
            activeMenu={activeMenu}
            onClickItem={handleClickMenuItem}
            darkBackground={mode === 'admin'}
          />
        </BottomSection>
        
      </Wrapper>
    </Root>
  );
};

export default App;
