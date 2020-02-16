import React from 'react';
// import logo from './logo.svg';
// import Cursos from './components/Cursos';
import './App.css';
import NavBar from './components/NavBar';
import FloatWidget from './components/FloatWidget';
import  {Flex} from 'rebass';
import {
  Section,
  Hero,
  CallToAction, IqDevices,
  Testimony, ScrollDownIndicator
} from './export'

function App() {
  // const cursos = [
  //   {
  //     title: 'Threads',
  //     caption: 'Illustration'
  //   },
  //   {
  //     title: 'Explore',
  //     caption: 'Graphic Design'
  //   },
  //   {
  //     title: 'Finish',
  //     caption: 'Identity'
  //   },
  //   {
  //     title: 'Lines',
  //     caption: 'Branding'
  //   },
  //   {
  //     title: 'Southwest',
  //     caption: 'Website Design'
  //   },
  //   {
  //     title: 'Window',
  //     caption: 'Photography'
  //   },
  //   {
  //     title: 'Pizza',
  //     caption: 'I love pizza!'
  //   }
  // ]

  // onde é configurada as posicoes width onde estão chamando essa variável
  const smallSection = [1, 1 / 2, 1 / 2, 1 / 2, 2 / 4];

  const telegraphInstrucoes = 'https://telegra.ph/Doctor-Trader---Como-receber-50---90-sinais-GRATUITOS-02-13';
  const telegramGroup = 'https://t.me/DoctorTraderbr';

  return (
    <div className="App">

      <NavBar></NavBar>

      <Hero
        color='white'
        bg='blue'
        backgroundImage='https://i.ibb.co/g3xGjyv/grafico.jpg'
      >
        <Flex flexWrap='wrap' alignItems='center' >
          <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3} >
            <IqDevices
              style={{
                transform: 'translate(32px, 0px)'
              }}
              src='https://static.cdnpub.info/lp/mobile/assets/images/header__img--desktop.png?v=9b27e48' alt='banner' />
          </Flex>
          <Section
            heading='Voe alto nos gráficos!'
            subhead='Sinais gratuitos altamente precisos. Tenha a melhor consultoria de opções binárias. Os Sinais de negociação de opções binárias tem o potencial de transformar um trader mediano em excelente. Depois de entrar em nosso grupo do telegram, você economizará muito tempo de pesquisas e análises de dados de mercado e poderá se concentrar apenas em obter lucro!'
            width={[1, 1, 1 / 2]} p={3} >
            <Flex mt={3} flexWrap='wrap'>
              <CallToAction href='#subServices'>
                Saiba Mais
              </CallToAction>
            </Flex>
          </Section>
        </Flex>
        <ScrollDownIndicator />
      </Hero>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Sobre o Doctor Trader</h2>
              <h3 className="section-subheading text-muted">Lucrar nunca foi tão fácil!</h3>
            </div>
          </div>
          <div className="row text-center" id='subServices'>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i className="fa fa-circle fa-stack-2x text-primary" id='circle'></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse" ></i> */}
                <img src={require('./assets/img/save-money.png')} alt='icon-save-money'></img>
              </span>
              <h4 className="service-heading">O que são sinais de opções binárias?</h4>
              <p className="text-muted" >Doctor Trader, equipe especialista em sinais enviará uma lista de sinais IQ OPTION de opções binarias no grupo do telegram depois de analisar cuidadosamente e minuciosamente os dados fundamentais e técnicos, as tendências, negociação e a análise estatística que podem ter um impacto direto em vários pares e ativos de moedas.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={require('./assets/img/crowdfunding.png')}  alt='icon-crowdfunding'></img>
              </span>
              <h4 className="service-heading">Traders experientes</h4>
              <p className="text-muted">Os traders recebem uma lista de sinais recomendados por aqueles que têm experiência em análises estatísticas e de mercado. Esta é uma pequena lista de recomendações que esses especialistas consideram as oportunidades de negociação mais bem-sucedidas.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={require('./assets/img/bussiness.png')}  alt='icon-business'></img>
              </span>
              <h4 className="service-heading">Suporte Ativo</h4>
              <p className="text-muted">Os administradores do Doctor trader além de fornecer sinais de opções binárias e digitais ainda fornecem aos seus traders dicas de negociação e as atuais e análises de mercado. Isso evita que os traders precisem gastar muito tempo tentando interpretar as tendências do mercado por conta própria.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={require('./assets/img/2498326.png')}  alt='icon-2498326'></img>
              </span>
              <h4 className="service-heading">Sinais Altamente Precisos</h4>
              <p className="text-muted">Os sinais de opções binárias são fornecidos após uma análise detalhada por especialistas que estudaram, analisaram e interpretaram cuidadosamente o mercado financeiro, bem como as tendências atuais. Esses especialistas dedicam tempo para processar todas as informações necessárias para prever um comércio forte e lucrativo.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={require('./assets/img/money.png')} alt='icon-money'></img>
              </span>
              <h4 className="service-heading">Assertividade</h4>
              <p className="text-muted">Os sinais de opções binárias fornecem informações concretas e atualizadas sobre os ativos que consideram os mais rentáveis, indicando a direção e o período de vencimento da vela.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={require('./assets/img/investor.png')} alt='icon-investor'></img>
              </span>
              <h4 className="service-heading">Fique fera!</h4>
              <p className="text-muted">Os traders que se aproveitam desse processo incrível têm maior probabilidade de prever rapidamente os melhores resultados de mercado possíveis, com apenas uma breve olhada nas informações fornecidas pelos serviços de sinais. Assim, eles serão capazes de tomar uma decisão educada com base em consultoria e análise de especialistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Cursos portfolioLinks={cursos}></Cursos> */}

      <section className="bg-light page-section" id="recomendacoes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">O que dizem nossos membros</h2>
              <h3 className="section-subheading text-muted">Quem conhece, recomenda.</h3>
            </div>
          </div>
          <div className="row">
            <Section
              width={smallSection}
            >
              <Flex alignItems='flex-end' justifyContent='space-around'>
                <Testimony
                  authorAvatar="https://pbs.twimg.com/profile_images/1224979951029510144/JksUEJbR_400x400.jpg"
                  authorName='Carol Veneza'
                  authorTitle='membro'
                  backgroundImage>
                  Depois que comecei a receber sinais do Doctor Trader, consegui dobrar minha banca!!
                  </Testimony>
              </Flex>
            </Section>
            <Section
              width={smallSection}
            >
              <Flex alignItems='flex-end' justifyContent='space-around'>
                <Testimony
                  authorAvatar="https://pbs.twimg.com/profile_images/1188163179186212864/lHPh6pbc_400x400.jpg"
                  authorName='Leonardo Limeira'
                  authorTitle='membro'>
                  No começo não acreditei muito, até que me surpreenderam bastante com a assertividade dos sinais.
                  </Testimony>
              </Flex>
            </Section>
          </div>
          <div className="row">
          </div>
        </div>
      </section>

      {/* <br />
      <br />
      <br />
      <br />
      <section id='funcionamento'>
        <div className="row text-center" id='funcionamento'>
          <img src={require('./assets/img/flowchart.png')} id='flowChartImg' style={{ width: '100%' }} alt = 'flowchart'/>
        </div>
      </section>
      <br /> */}

      {/* <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Como funciona</h2>
              <h3 className="section-subheading text-muted">Transparência é tudo.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                  <br />Of Our
                  <br />Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="page-section" id="participar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Participe do grupo exclusivo e comece a ter sucesso</h2>
              <h3 className="section-subheading text-muted">sinais a todo vapor de forma gratuita.</h3>
            </div>
            <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3} justifyContent='center'>
              <img src={require('./assets/img/unnamed.png')} alt="cellphone" ></img>
            </Flex>
            <Section
              heading='Sinais com muita assertividade!'
              subhead='Até os traders mais inexperientes podem coletar informações de qualidade e fazer negócios lucrativos, sem ter que ter nenhum conhecimento prévio sobre a análise técnica e estatística do mercado de opções binárias. Isso significa que eles podem gastar menos tempo analisando dados ou aprendendo sobre negociação e mais tempo realmente negociando e, assim, obtendo um lucro decente.'
              width={[1, 1, 1 / 2]} p={3}
              color='white' >
              <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                <CallToAction href={telegraphInstrucoes} target='_blank'
                >
                  🗣 Instruções
                </CallToAction>
              </Flex>
              <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                <CallToAction href={telegramGroup} target='_blank'
                ><span role="img" aria-label = 'message'>💬</span> Grupo do Telegram</CallToAction>
              </Flex>
            </Section>
          </div>
          <div className="row">
            <div className="col-lg-12">
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Doctor Trader</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/doctortrader_/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div> */}

            <FloatWidget></FloatWidget>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
