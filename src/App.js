import React from 'react';
// import logo from './logo.svg';
import Cursos from './components/Cursos';
import './App.css';
import NavBar from './components/NavBar';
import FloatWidget, { Container, Button, lightColors, darkColors } from './components/FloatWidget';
import ScrollDownIndicator from './components/ScrollDownIndicator';
import {
  Absolute, Flex, NavLink,
  Pre, Heading, Subhead, Box
} from 'rebass'
import {
  Section,
  Hero,
  CallToAction, Phone, MacWindow, IqDevices,
  Feature, Testimony, Contributor,
  Checklist
} from './export'
import { marginTop } from 'styled-system';


function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  // onde é configurada as posicoes width onde estão chamando essa variável
  const smallSection = [1, 1 / 2, 1 / 2, 1 / 3, 2 / 4]

  return (
    <div className="App">

      <NavBar></NavBar>

      {/* <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Voe alto nos gráficos!</div>
            <div className="intro-heading text-uppercase">Sinais gratuitos altamente precisos. Tenha a melhor consultoria de opções binárias. Os Sinais de negociação de opções binárias tem o potencial de transformar um trader mediano em excelente. Depois de entrar em nosso grupo do telegram, você economizará muito tempo de pesquisas e análises de dados de mercado e poderá se concentrar apenas em obter lucro!</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Saiba Mais</a>
          </div>
          <img src='https://static.cdnpub.info/lp/mobile/assets/images/header__img--desktop.png?v=9b27e48'></img>
        </div>
        <ScrollDownIndicator />
      </header> */}

      <Hero
        color='white'
        bg='blue'
        backgroundImage='https://i.ibb.co/g3xGjyv/grafico.jpg'
      >
        <Flex flexWrap='wrap' alignItems='center' >
          <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3}>
            <IqDevices
              style={{
                transform: 'translate(32px, 0px)'
              }}
              src='https://static.cdnpub.info/lp/mobile/assets/images/header__img--desktop.png?v=9b27e48' />
          </Flex>
          <Section
            heading='Voe alto nos gráficos!'
            subhead='Sinais gratuitos altamente precisos. Tenha a melhor consultoria de opções binárias. Os Sinais de negociação de opções binárias tem o potencial de transformar um trader mediano em excelente. Depois de entrar em nosso grupo do telegram, você economizará muito tempo de pesquisas e análises de dados de mercado e poderá se concentrar apenas em obter lucro!'
            width={[1, 1, 1 / 2]} p={3} >
            <Flex mt={3} flexWrap='wrap'>
              <CallToAction
                is={'www.google.com.br'}
                to='/getting-started'
                mr={3}
              >Saiba Mais</CallToAction>
              {/* <Pre p={3}>npm i react-landing-page@next</Pre> */}
            </Flex>
          </Section>
        </Flex>
        <ScrollDownIndicator />
      </Hero>

      <FloatWidget></FloatWidget>

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
                <i className="fa fa-circle fa-stack-2x text-primary" id='circle'></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse" ></i>
              </span>
              <h4 className="service-heading">O que são sinais de opções binárias?</h4>
              <p className="text-muted">Doctor Trader, equipe especialista em sinais enviará uma lista de sinais IQ OPTION de opções binarias no grupo do telegram depois de analisar cuidadosamente e minuciosamente os dados fundamentais e técnicos, as tendências, negociação e a análise estatística que podem ter um impacto direto em vários pares e ativos de moedas.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Traders experientes</h4>
              <p className="text-muted">Os traders recebem uma lista de sinais recomendados por aqueles que têm experiência em análises estatísticas e de mercado. Esta é uma pequena lista de recomendações que esses especialistas consideram as oportunidades de negociação mais bem-sucedidas.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Suporte Ativo</h4>
              <p className="text-muted">Os administradores do Doctor trader além de fornecer sinais de opções binárias e digitais ainda fornecem aos seus traders dicas de negociação e as atuais e análises de mercado. Isso evita que os traders precisem gastar muito tempo tentando interpretar as tendências do mercado por conta própria.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Sinais Altamente Precisos</h4>
              <p className="text-muted">Os sinais de opções binárias são fornecidos após uma análise detalhada por especialistas que estudaram, analisaram e interpretaram cuidadosamente o mercado financeiro, bem como as tendências atuais. Esses especialistas dedicam tempo para processar todas as informações necessárias para prever um comércio forte e lucrativo.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Assertividade</h4>
              <p className="text-muted">Os sinais de opções binárias fornecem informações concretas e atualizadas sobre os ativos que consideram os mais rentáveis, indicando a direção e o período de vencimento da vela.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Fique fera!</h4>
              <p className="text-muted">Os traders que se aproveitam desse processo incrível têm maior probabilidade de prever rapidamente os melhores resultados de mercado possíveis, com apenas uma breve olhada nas informações fornecidas pelos serviços de sinais. Assim, eles serão capazes de tomar uma decisão educada com base em consultoria e análise de especialistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Cursos portfolioLinks={portfolioLinks}></Cursos> */}

      <section className="page-section">
        <img src={require('./assets/img/flowchart.png')} id='flowChartImg'></img>
      </section>

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




      <section className="bg-light page-section" id="team">
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
            <Section
                width={smallSection}
              >
                <Flex alignItems='flex-end' justifyContent='space-around'>
                  <Testimony
                    authorAvatar="https://pbs.twimg.com/profile_images/1217637368364179457/_5SsIk6H_400x400.jpg"
                    authorName='Pedro Moura'
                    authorTitle='membro'>
                    Estou muito contente com os resultados dos sinais do grupo do Doctor Trader.
                  </Testimony>
                </Flex>
              </Section>
          </div>
          <div className="row">
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Participe do grupo exclusivo e comece a ter sucesso</h2>
              <h3 className="section-subheading text-muted">sinais a todo vapor de forma gratuita.</h3>
            </div>
            <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3}>
              <IqDevices
                style={{
                  transform: 'translate(32px, 0px)',
                  width: '350px'
                }}
                src={require('./assets/img/unnamed.png')} />
            </Flex>
            <Section
              heading='Sinais com muita assertividade!'
              subhead='Até os traders mais inexperientes podem coletar informações de qualidade e fazer negócios lucrativos, sem ter que ter nenhum conhecimento prévio sobre a análise técnica e estatística do mercado de opções binárias. Isso significa que eles podem gastar menos tempo analisando dados ou aprendendo sobre negociação e mais tempo realmente negociando e, assim, obtendo um lucro decente.'
              width={[1, 1, 1 / 2]} p={3}
              color='white' >
              <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                <CallToAction
                  is={'www.google.com.br'}
                  to='/getting-started'
                  mr={3}
                >Começar Agora</CallToAction>
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
                  <a href="https://www.instagram.com/doctortrader_/" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
