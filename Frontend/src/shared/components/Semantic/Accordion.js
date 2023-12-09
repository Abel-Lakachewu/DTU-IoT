import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion style={{paddingLeft: 40}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          "What is IOT?"
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Why is IoT important?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          IoT enables companies to automate processes and reduce labor costs. It also cuts down on waste and improves service delivery, making it less expensive to manufacture and deliver goods, as well as offering transparency into customer transactions.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Where is IoT used?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          Generally, IoT is most abundant in manufacturing, transportation and utility organizations, making use of sensors and other IoT devices; however, it has also found use cases for organizations within the agriculture, infrastructure and home automation industries, leading some organizations toward digital transformation.
          </p>
          
        </Accordion.Content>

        
        
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How does IOT work?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
          IoT devices are built on the concept of artificial intelligence. Since the mainstay of the IoT technology is enhanced communication, paired with intuitive performance, it incorporates sensor devices and unique data processing mechanisms. In many ways, IoT devices are an amalgamation of several advanced technologies. IoT benefits of artificial intelligence
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          IS IOT the future?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
          IoT devices seem to be ubiquitous, but the truth is we're not nearly there yet. In fact, IoT Analytics continues to predict steady growth as the future for IoT for years to come, with more than 27 billion devices online by 2025.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
